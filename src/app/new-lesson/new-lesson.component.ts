import { Component, OnInit, NgModule } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../lesson';
import { User } from '../user';
import { style, state, trigger, transition, animate, stagger, query, sequence } from '@angular/animations';

@Component({
  selector: 'app-new-lesson',
  templateUrl: './new-lesson.component.html',
  styleUrls: ['./new-lesson.component.css'],
  animations: [
    trigger('showCalendar', [
      state('closed', style({
        height: '0px',
        opacity: 0,
      })),
      state('open', style({
        height: '*',
        opacity: 1,
      })),

      transition('closed => open', [
        sequence([
          animate('500ms ease-in', style({
            position: 'relative',
            height: '*',
          })),
          animate('500ms ease-in', style({
            opacity: 1,
          }))
        ])
      ]),
      transition('open => closed', [
        style({
          opacity: 0,
          height: '*',
        }),
        animate('500ms ease-in', style({
          position: 'relative',
          height: '0px',
        }))
      ]),
    ]),
  ]
})
export class NewLessonComponent implements OnInit {

  group: string;


  showForm = false;
  message = 'Add a New Lesson';
  students: User[];
  instructors: User[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }



  lesson_id: number;
  lesson_name: string;
  lesson_u_id: number;
  lesson_start_time: number;
  lesson_end_time: number;

  ngOnInit() {
    this.students = this.dataService.getUsers();
    this.instructors = this.dataService.getInstructors();
    this.group = this.route.snapshot.params['group'];

  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.message = this.showForm ? "Close" : "Add a New Lesson";
  }

  newLesson() {
    let u_id = this.route.snapshot.params['id'];

    let newLesson = new Lesson();
    newLesson.id = 0;
    newLesson.name = this.lesson_name;

    newLesson.start_time = this.lesson_start_time;
    newLesson.end_time = this.lesson_end_time;

    if (this.group == 'instructor') {
      newLesson.user_id = this.lesson_u_id;
      newLesson.instructor_id = u_id;
    } else if (this.group = 'user') {
      newLesson.instructor_id = this.lesson_u_id;
      newLesson.user_id = u_id;
    }

    this.dataService.addLesson(newLesson.id, newLesson.name, newLesson.user_id, newLesson.instructor_id, newLesson.start_time, newLesson.end_time);
    console.log(this.dataService.getLessons());
  }

}
