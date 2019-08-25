import { Component, AfterViewInit, ChangeDetectorRef, NgZone } from "@angular/core";

@Component({
    selector: 'performance-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    currentTime: Date;

    constructor() {
        this.currentTime = new Date();
        setInterval(() => { 
            this.currentTime = new Date();
        }, 1000);
    }
}