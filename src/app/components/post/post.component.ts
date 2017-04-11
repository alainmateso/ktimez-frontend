import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]

})
export class PostComponent implements OnInit {
  post = {};
  constructor(private activatedRoute: ActivatedRoute,private singlepostService: PostService, private router: Router) {
    this.activatedRoute.params.
      map(params => params['id']).subscribe((id)=>{
      this.singlepostService.getSingle(id).subscribe(post => {
      this.post = post;
      console.log(post);
    });
  });
  }


  ngOnInit() {

    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        this.activatedRoute.params.
          map(params => params['id']).subscribe((id)=>{
          this.singlepostService.countView(id).subscribe(post => {
          this.post = post;
        });
      });
        console.log('page visited...');


    });
  }

}
