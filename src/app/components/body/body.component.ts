import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [PostService]
})
export class BodyComponent implements OnInit {
  posts: String [];
  constructor(private postService: PostService) {
      postService.getPosts().subscribe(posts =>{
      this.posts = posts;
      console.log(posts);
    });
}
  ngOnInit() {
  }

}
