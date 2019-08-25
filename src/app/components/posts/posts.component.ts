import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Post } from './posts.model';

@Component({
    selector: 'performance-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnChanges {
    
    @Input()
    posts: Array<Post>;

    ngOnChanges(changes: SimpleChanges): void {
    }

    getStatus(post: Post): string {
        return post.status === 0 ? "Bad": "Good";
    }

}