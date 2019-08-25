import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class UserService {

    constructor(private http: HttpClient) {}

    getUsers(): Observable<Array<User>> {
        return this.http.get<Array<User>>('/assets/users.json');
    }

    addUser(user: User): Observable<Array<User>> {
        return this.getUsers().pipe(map((users: Array<User>) => [user, ...users]));
    }

}