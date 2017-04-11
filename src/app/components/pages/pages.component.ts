import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  providers: [PostService]
})
export class PagesComponent implements OnInit {
  posts: String [];
  constructor(private activatedRoute: ActivatedRoute,private postService: PostService) {
      this.activatedRoute.params.
      map(params => params['page']).subscribe((page)=>{
      this.postService.getPostsbyPage(page).subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
   });

}

  ngOnInit() {
  }

}
