import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ImageService} from './services/image.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SampleComponent } from './sample/sample.component';

import {RouterModule, Routes} from '@angular/router';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CategoryButtonsComponent } from './components/category-buttons/category-buttons.component';

const appRoutes:Routes = [
  {path:'',component:ImagesListComponent},
  {path:'images/:id',component:ImageDetailComponent},
  {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SampleComponent,
    ImagesListComponent,
    ImageDetailComponent,
    PageNotFoundComponent,
    CategoryButtonsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{enableTracing:false})
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
