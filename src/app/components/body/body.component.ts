import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {PageService} from '../../services/page.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [PostService,PageService]
})
export class BodyComponent implements OnInit {
  posts: String [];
  pages: Number [];
  /*pages = {
     page:[1,2,3,5,6]
  };*/

  constructor(private activatedRoute: ActivatedRoute,private postService: PostService,private p:PageService) {
      postService.getPosts().subscribe(posts =>{
      this.posts = posts;
      console.log(posts);

    });

    p.getPage().subscribe(list =>{

    var l=list/10;
    var pl=Math.round(l);
    var p=[];

    if(pl<20){
      for (var i = 1; i <=pl; i++) {
      p.push(i);
      this.pages = p;
    }
    }
    console.log(this.pages);

  });


}
  ngOnInit() {

        this.activatedRoute.params.
        map(params => params['page']).subscribe((page)=>{
        this.postService.getPostsbyPage(page).subscribe(posts => {
        this.posts = posts;
        console.log(posts);
      });
     });
  }

}
