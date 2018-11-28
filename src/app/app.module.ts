import { NgModule }					from '@angular/core';
import { BrowserModule }			from '@angular/platform-browser';
import { FormsModule }				from '@angular/forms';
import { Routes, RouterModule } 	from "@angular/router";

import { AppComponent }			 	from './app.component';
import { DialogWindowComponent } 	from "./dialog.window.component";
import { TodoComponent } 			from "./todo.component";
import { ExitComponent } 			from "./exit.component";


const appRoutes: Routes = [
	{path: '', component: DialogWindowComponent},
	{path: 'my_app', component: AppComponent},
	{path: 'to_do', component: TodoComponent},
	{path: 'exit', component: ExitComponent}
];

@NgModule({
	imports:		[ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
	declarations:	[ AppComponent, DialogWindowComponent, TodoComponent, ExitComponent ],
	bootstrap:		[ DialogWindowComponent ]
})

export class AppModule { }