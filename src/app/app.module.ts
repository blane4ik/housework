import { NgModule }					from '@angular/core';
import { BrowserModule }			from '@angular/platform-browser';
import { FormsModule }				from '@angular/forms';
import { Routes ,RouterModule } 	from "@angular/router";

import { AppComponent }			 	from './app.component'
import { DialogWindowComponent } 	from "./dialog.window.component";
import { TodoComponent } 			from "./todo.component";

const appRoutes: Routes = [
	{path: 'dialog_window', component: DialogWindowComponent},
	{path: 'to-do', component: TodoComponent}
];

@NgModule({
	imports:		[ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
	declarations:	[ AppComponent, DialogWindowComponent, TodoComponent ],
	bootstrap:		[ AppComponent ]
})

export class AppModule { }