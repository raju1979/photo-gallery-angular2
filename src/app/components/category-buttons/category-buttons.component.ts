import { Component, OnInit } from '@angular/core';

import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-category-buttons',
  templateUrl: './category-buttons.component.html',
  styleUrls: ['./category-buttons.component.css']
})
export class CategoryButtonsComponent implements OnInit {

  constructor(private _imageService:ImageService) { 

  }

  ngOnInit() {
  }

  filterImagesList(e){
    let tempArr = [];
    let attr = e.target.attributes['data-category'].value;
    this._imageService.sendMessage(attr);

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

}
