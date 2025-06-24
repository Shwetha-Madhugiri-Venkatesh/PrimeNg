import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { HttpClientModule } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    CalendarModule,
    CascadeSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
