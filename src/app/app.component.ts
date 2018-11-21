import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<a routerLink="/dialog_window">Диалогове Окно</a>
                <router-outlet></router-outlet>`
})

export class AppComponent {

}


