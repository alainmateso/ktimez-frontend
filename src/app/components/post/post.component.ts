import { Component, OnInit } from '@angular/core';
import {SinglepostService} from '../../services/singlepost.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [SinglepostService]

})
export class PostComponent implements OnInit {
  post={};
  constructor(private activatedRoute: ActivatedRoute,private singlepostService: SinglepostService) {
    this.activatedRoute.params.
      map(params => params['id']).subscribe((id)=>{
      this.singlepostService.getSingle(id).subscribe(post => {
      this.post = post;
      console.log(post);
    });
  });
  }


  ngOnInit() {
  }

}
