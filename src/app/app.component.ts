import { Component } from '@angular/core';

import {ImageService} from './services/image.service';

import { NavbarComponent } from './components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _imageService:ImageService){
    console.log(this._imageService.getImages());

  }
}
