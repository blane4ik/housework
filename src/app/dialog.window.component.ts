import { Component } from "@angular/core";

@Component({
    selector: 'dialog-window',
    template: `<div class="background">
        <header>
            <p>Введите, пожалуйста, Ваше имя!</p>
            <div class="close">X</div>
        </header>
        <div class="enter">
            <label for="name">Введите Имя:</label>
            <input type="text" name="name" placeholder=" Имя...">
        </div>
        <div class="footer">
            <div class="cancel">Отменить</div>
            <div class="accept">Принять</div>
        </div>
    </div>`,
    styleUrls: ['./styles/dialog.window.component.css']
})

export class DialogWindowComponent{

}