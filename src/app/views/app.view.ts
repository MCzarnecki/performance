import { Component, OnChanges, SimpleChanges } from "@angular/core";
import { PostsService } from '../components/posts/posts.service';
import { Post } from '../components/posts/posts.model';
import { Observable } from 'rxjs';
import { User } from '../components/users/user.model';
import { UserService } from '../components/users/users.service';

@Component({
    selector: 'performance-main-view',
    templateUrl: './app.view.html',
    styleUrls: ['./app.view.scss']
})
export class AppViewComponent implements OnChanges {
    posts$: Observable<Array<Post>>;
    users$: Observable<Array<User>>;
    dummy: string;

    constructor(private postService: PostsService, private usersService: UserService) {
        this.posts$ = this.postService.getPosts();
        this.users$ = this.usersService.getUsers();
        this.dummy = 'aaaa';
        setTimeout(() => this.dummy = 'bbbb', 5000);
    }

    ngOnChanges(changes: SimpleChanges): void {
    }


    addUser(user: User): void {
        console.log(`Adding user: ${user.name}`);
        this.users$ = this.usersService.addUser(user);
    }
}