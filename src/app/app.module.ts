import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLessonsComponent } from './user-lessons/user-lessons.component';
import { InstructorLessonsComponent } from './instructor-lessons/instructor-lessons.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLessonsComponent,
    InstructorLessonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
