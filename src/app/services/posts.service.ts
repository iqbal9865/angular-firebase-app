import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http: HttpClient ) { }

  postsUrl = 'https://jsonplaceholder.typicode.com/users/1/posts';

  loadAllPosts() {
    return this.http.get(this.postsUrl);
  }
}
