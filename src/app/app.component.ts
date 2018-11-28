import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                <div class="background">
                    <h1>Уважаемый(ая), {{userName}}!</h1>
                    <h2>Добро пожаловать в приложение "Список Дел"!</h2>
                    <to-do></to-do>
                </div>
                `,
                changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./styles/app.component.css']
})

export class AppComponent {
    @Input() userName: string;
}




