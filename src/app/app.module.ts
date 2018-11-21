import { NgModule }					from '@angular/core';
import { BrowserModule }			from '@angular/platform-browser';
import { FormsModule }				from '@angular/forms';
import { Routes ,RouterModule } 	from "@angular/router";

import { AppComponent }			 	from './app.component'
import { DialogWindowComponent } 	from "./dialog.window.component";

const appRoutes: Routes = [
	{path: 'dialog_window', component: DialogWindowComponent},
];

@NgModule({
	imports:		[ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
	declarations:	[ AppComponent, DialogWindowComponent ],
	bootstrap:		[ AppComponent ]
})

export class AppModule { }