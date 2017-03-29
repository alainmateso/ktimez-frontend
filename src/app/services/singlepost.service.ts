import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SinglepostService {

  constructor(private http: Http) {
   console.log('SinglePostsService initialized....');
  }
  getSingle(id){
    return this.http.get('http://localhost:3000/posts/'+id)
    .map(res=>res.json());
  }

}
