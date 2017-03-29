import { Component, OnInit } from '@angular/core';
import {PopularpostsService} from '../../services/popularposts.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers:[PopularpostsService]
})
export class SidebarComponent implements OnInit {
  posts = [];
  constructor(private activatedRoute: ActivatedRoute,private popular: PopularpostsService) {
        popular.getPosts().subscribe(posts =>{
        this.posts = posts;
        console.log(posts);
      });
  }

  ngOnInit() {
  }

}
