import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  moduleId: module.id
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  posts = ['a','b','c'];
}
