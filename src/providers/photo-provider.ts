import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PhotoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PhotoProvider {

  constructor(public http: Http) {
  }

  ionViewDidLoad() {
    console.log('Hello GalleryPage Page');
  }

}