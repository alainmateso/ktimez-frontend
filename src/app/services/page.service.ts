import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PageService {


  constructor(private http: Http) {
   console.log('Pages service initialized...');
  }
 getPage(){
    return  this.http.get('http://localhost:3000/postscount')
    .map(res => res.json());

 }
 getPageCat(name){
   return this.http.get('http://localhost:3000/postscountcat/'+name)
   .map(res=>res.json());

 }
}
