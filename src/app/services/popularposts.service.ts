import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PopularpostsService {

  constructor(private http: Http) {
  console.log('Popular Post service initialized...');
  }
 getPosts(){
   return this.http.get('http://localhost:3000/posts/popular')
   .map(res => res.json());
 }

}
