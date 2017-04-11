import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
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
 getPostsbyPage(page){
   var p = parseInt(page);
   return this.http.get('http://localhost:3000/posts/page/'+p)
   .map(res => res.json());
 }
 getPopularPosts(){
   return this.http.get('http://localhost:3000/posts/popular')
   .map(res => res.json());
 }
 getCat(name){
   return this.http.get('http://localhost:3000/category/'+name)
   .map(res=>res.json());
 }
 getSingle(id){
   return this.http.get('http://localhost:3000/posts/'+id)
   .map(res=>res.json());
 }

  countView(id) {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     let body = JSON.stringify(id);
     return this.http.put('http://localhost:3000/posts/' +id, body, headers).map(res=> res.json());
   }
}
