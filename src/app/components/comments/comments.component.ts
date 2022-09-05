import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor() { }
  public comments: any = [];

  Comments(data: any) {
    this.comments.push(data)
  }

  ngOnInit(): void {

  }
}
