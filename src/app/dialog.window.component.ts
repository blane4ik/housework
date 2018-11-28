import {Component} from "@angular/core";
import {Router} from "@angular/router";


@Component({
    selector: 'dialog-window',
    template: `<div class="background" *ngIf="condition && exit">
        <header>
            <p>Введите, пожалуйста, Ваше имя!</p>
            <div class="close" (click)="cancel()"></div>
        </header>
        <div class="enter">
            <label for="name">Введите Имя:</label>
            <input type="text" name="name" placeholder=" Имя..." [(ngModel)] = 'name'>
        </div>
        <div class="footer">
            <div class="cancel" (click)="cancel()">Отменить</div>
                <div class="accept" (click)="toggle()">Принять</div>
        </div>
    </div>
    <div *ngIf="!condition">
        <my-app [userName] = 'name'></my-app>
    </div>
    <div *ngIf="!exit">
        <exit></exit>
    </div>`,
    styleUrls: ['./styles/dialog.window.component.css'],
})

export class DialogWindowComponent {
    condition: boolean = true;
    name: string = '';
    exit: boolean = true;

    constructor(private router: Router){}

    toggle(){
        if (this.name !== '') {
           this.condition = !this.condition;
            this.router.navigate(['/my_app']);
        } else{
            alert('Необходимо ввести имя!');
        }
    }

    cancel(){
        if ( confirm('Вы действительно хотите покинуть приложение?') ){

            this.exit = !this.exit;
            this.router.navigate(['exit']);

        } else{
            alert('Очеь хорошо)');
        }
    }
}