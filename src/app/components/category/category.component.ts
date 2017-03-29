import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoriesService]
})
export class CategoryComponent implements OnInit {

  posts=[];
  constructor(private activatedRoute: ActivatedRoute,private cat: CategoriesService) {
    this.activatedRoute.params.
      map(params => params['name']).subscribe((name)=>{
      this.cat.getCat(name).subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  });
  }

  ngOnInit() {
  }

}
