import { Component } from "@angular/core";

@Component({
    selector: 'to-do',
    template: `<div class="background">
        <header>
            <p>Понедельник</p>
            <div class="add">Добавить</div>
            <div class="add">Удалить</div>
        </header>
        <article>
            <ul>
                <li>Почистить картошку</li>
                <li>Помыть посуду</li>
                <li>Убрать дома</li>
                <li>Освоить Angular</li>
            </ul>
        </article>
    </div>`,
    styleUrls: ['./styles/todo.component.css']
})

export class TodoComponent{

}