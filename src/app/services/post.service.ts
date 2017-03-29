import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  
  constructor(private http: Http) {
  console.log('Post service initialized...');
  }
 getPosts(){
   return this.http.get('http://localhost:3000/posts')
   .map(res => res.json());
 }
}
