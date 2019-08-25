import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post } from './posts.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {

    constructor(private http: HttpClient) {}

    getPosts(): Observable<Array<Post>> {
        return this.http.get<Array<Post>>('/assets/posts.json');
    }

}