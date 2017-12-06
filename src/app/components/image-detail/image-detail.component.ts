import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {ImageService} from '../../services/image.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  imgId:any;
  imageObj:any;
  subscription:Subscription;
  message:any;

  constructor(private _route:ActivatedRoute, private _imageService:ImageService) { 
    
  }

  ngOnInit() {
    this.imgId = this._route.snapshot.params['id'];
    this.imageObj = this._imageService.getImage(this.imgId);
    console.log(this.imageObj)
  }

}
