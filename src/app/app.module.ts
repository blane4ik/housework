import { NgModule }			from '@angular/core';
import { BrowserModule }	from '@angular/platform-browser';
import { FormsModule }		from '@angular/forms';
import { Routes ,RouterModule } from "@angular/router";

import { AppComponent }		from './app.component'

const appRoutes: Routes = [

];

@NgModule({
	imports:		[ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
	declarations:	[ AppComponent ],
	bootstrap:		[ AppComponent ]
})

export class AppModule { }