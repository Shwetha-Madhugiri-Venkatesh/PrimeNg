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
import { GraphComponent } from './graph/graph.component';
import { ChartModule } from 'primeng/chart';
import { EditorModule } from 'primeng/editor';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    CalendarModule,
    CascadeSelectModule,
    ChartModule,
    EditorModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
