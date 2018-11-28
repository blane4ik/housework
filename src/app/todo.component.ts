import { Component } from "@angular/core";


@Component({
    selector: 'to-do',
    template: `<div class="background">
        <header>
            <input [(ngModel)]="newTodo" (keyup.enter)="addTodo($event)" placeholder=" Введите новое дело...">
            <div class="add" (click)="addTodo($event)">Добавить</div>
        </header>
        <article>
            <ul>
                <li *ngFor="let todo of todos; let i=index">
                    <input type="checkbox" class="checkbox" [(ngModel)]="todo.completed" />
                    <span [ngClass]="{'checked': todo.completed}">{{ todo.newTodo }}</span>
                    <span (click)="deleteTodo(i)" class="delete-ico">[X]</span>
                </li>
            </ul>
        </article>
        <footer>
            <div class="delete" (click)="deleteSelectedTodos()">Удалить выполненное</div>
        </footer>
    </div>`,
    styleUrls: ['./styles/todo.component.css']
})

export class TodoComponent{
    newTodo: string;
    todos: any;
    todoObj: any;

    constructor() {
        this.newTodo = '';
        this.todos = [];
    }

    addTodo(event) {
        this.todoObj = {
            newTodo: this.newTodo,
            completed: false
        }
        if (this.newTodo != ''){
            this.todos.push(this.todoObj);
            this.newTodo = '';
            event.preventDefault();
        } else{
            alert('Введите дело!');
        }
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }

    deleteSelectedTodos() {
        for(var i=(this.todos.length -1); i > -1; i--) {
            if(this.todos[i].completed) {
                this.todos.splice(i, 1);
            }
        }
    }
}