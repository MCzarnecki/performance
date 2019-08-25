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

    @Input()
    dummy: string;

    ngOnChanges(changes: SimpleChanges): void {
        console.log('Posts', changes);
    }

    getStatus(post: Post): string {
        console.log('Status')
        return post.status === 0 ? "Bad": "Good";
    }

}