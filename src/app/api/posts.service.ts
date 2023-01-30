import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataItem } from '../pages/posts-list/data-item';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPostDetails(id: number): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  editPost(post: DataItem): Observable<any> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + post.id, {
      ...post
    })
  }
}
