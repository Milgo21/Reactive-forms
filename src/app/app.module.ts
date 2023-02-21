import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormGroupDirective } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
