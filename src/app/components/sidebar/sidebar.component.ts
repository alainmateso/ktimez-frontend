import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[PostService]
})
export class SidebarComponent implements OnInit {
  posts = [];
  constructor(private activatedRoute: ActivatedRoute,private popular: PostService) {
        popular.getPopularPosts().subscribe(posts =>{
        this.posts = posts;
        console.log(posts);
      });
  }

  ngOnInit() {
  }

}
