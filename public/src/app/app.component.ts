import { Component } from '@angular/core';
import { HttpService } from './http.service';
// ChatBot
// import { ChatBot } from 'angular-ai-chat-bot';
// import { Subject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // template: `<Chat-bot class="chat-window"
    //                           [token]="accessToken"
    //                           [msg]="message"
    //                           >
    //            <ng-template>
    //            </ng-template>
    //          </Chat-bot>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // public accessToken = 'YOUR_ACCESS_TOKEN';
    // public message: Subject<any> = new Subject();
    // constructor(private _httpService: HttpService) { }
}