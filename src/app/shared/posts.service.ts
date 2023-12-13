import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Post, fbCreateResponse } from "./interfaces";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient){}

  create(post: Post): Observable<Post> {
    return this.http.post(`${environment.fbDbUrl}/posts.json`, post)
      .pipe(
        map((response: fbCreateResponse) => {
          return {
            ...post,
            id: response.name,
            date: new Date(post.date)
          }
        })
      )
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${environment.fbDbUrl}/posts.json`)
    .pipe(
      map((response: {[key: string]: any}) => {
        return Object
        .keys(response)
        .map(key => ({
          ...response[key],
          id: key,
          date: new Date(response[key].date)
        }))

      })
    )
  }
}