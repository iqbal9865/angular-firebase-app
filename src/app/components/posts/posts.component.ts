import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor( private postservice: PostsService ) { }

  public posts: any = [];

  loadAllPosts() {
    this.postservice.loadAllPosts().subscribe((post) => {
      this.posts = post;
    })
  }

  ngOnInit(): void {
    this.loadAllPosts();
  }
}
