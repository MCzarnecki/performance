import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { User } from './user.model';

@Component({
    selector: 'performance-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnChanges {
    
    @Input()
    users: Array<User>;
    
    @Output()
    userAdded: EventEmitter<User> = new EventEmitter();

    user: string;

    ngOnChanges(changes: SimpleChanges): void {
    }

    addUser(): void {
        this.userAdded.emit({name: this.user});
        this.user = '';
    }
}