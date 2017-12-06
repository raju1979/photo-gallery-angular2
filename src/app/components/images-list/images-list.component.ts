import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../services/image.service';
import {Router} from "@angular/router";

import { Subscription } from 'rxjs/Subscription';

declare var Shuffle:any;

@Component({
  selector: 'images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {

  imagesArr = [];
  myShuffle:any;

  category:string = 'all';

  subscription:Subscription;

  constructor(private _imageService:ImageService, private _route:Router) {
    console.log(this._imageService.getImages());
    this.imagesArr = this._imageService.getImages();

    this.subscription = this._imageService.getMessage()
    .subscribe((message) => {
      console.log(message)
      this.category = message.category;
      if(this.category === 'all'){
        this.myShuffle.filter(Shuffle.ALL_ITEMS);
      }else{
        this.myShuffle.filter(this.category)
      }
    })

  }

  ngOnInit() {
    setTimeout(() => {
      this.myShuffle = new Shuffle(document.querySelector('.my-shuffle'),{
        itemSelector:'.js-item',
        sizer:'.my-sizer-element',
        buffer:1
      })
    })
    

    

  }

  filterImagesList(e){
    let tempArr = [];
    let attr = e.target.attributes['data-category'].value;
    
    if(attr === 'all'){
      this.myShuffle.filter(Shuffle.ALL_ITEMS);
    }else{
      this.myShuffle.filter(attr)
    }
    // if(attr === 'all'){
    //   //empArr = this.imagesArr;
    //   this.category = 'all';
    //   this.myShuffle.filter(Shuffle.ALL_ITEMS);
    // }else{
    //   // tempArr = this.imagesArr.filter((item) => {
    //   //   return item.category == attr
    //   // })
    //   this.category = attr;
    //   this.myShuffle.filter(this.category);
    // }    
    // console.log(tempArr)
  }

  gotoImageDetails(id){
    this._route.navigate(['/images',id])
  }

  getCategory(category):string{
    let retCategory:string = `["${category}"]`
    return retCategory;
  }

}
