import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';
import {PageService} from '../../services/page.service';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css'],
  providers: [PostService,PageService]
})
export class CategorypageComponent implements OnInit {
  posts=[];
  pages: Number [];

  constructor(private activatedRoute: ActivatedRoute,private cat: PostService,private p:PageService) {
    this.activatedRoute.params.
      map(params => params['name']).subscribe((name)=>{
      this.cat.getCat(name).subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  });




  }

  ngOnInit() {
    this.activatedRoute.params.
      map(params => params['name']).subscribe((name)=>{
      this.p. getPageCat(name).subscribe(list => {

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
    });
  }

}
