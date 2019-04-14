import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UserLessonsComponent } from './user-lessons/user-lessons.component';
// import { InstructorLessonsComponent } from './instructor-lessons/instructor-lessons.component';
import { LessonsComponent } from './lessons/lessons.component';



const routes: Routes = [
  // { path: 'user/:id/lessons', component: UserLessonsComponent },
  // { path: 'instructor/:id/lessons', component: InstructorLessonsComponent }
  { path: ':group/:id/lessons', component: LessonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
