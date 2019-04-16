import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { LessonsComponent } from './lessons/lessons.component';
import { NewLessonComponent } from './new-lesson/new-lesson.component';
import {FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalendarViewComponent,
    LessonsComponent,
    NewLessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
