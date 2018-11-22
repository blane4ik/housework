import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<a routerLink="/dialog_window">Диалогове Окно</a> |
                <a routerLink="/to-do">Список дел</a>
                <router-outlet></router-outlet>`
})

export class AppComponent {

}


