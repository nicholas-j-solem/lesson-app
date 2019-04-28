import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from '../lesson';
import { state, style, transition, animate } from '@angular/animations';
import { log } from 'util';
import { USERS } from '../mockData';
import { element } from '@angular/core/src/render3';
import { User } from '../user';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';
@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent implements OnInit {
  id: number;
  group: string;
  user: User;
  selectedLesson: Lesson;
  details: LessonDetailsComponent;
  lessons: Lesson[];
  calendarActive = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    router.events.subscribe(() => this.fetchLessons());
  }

  ngOnInit() {
    this.user = this.dataService.getUsers().find(_ => _.id === this.id);
    this.fetchLessons();
  }

  fetchLessons() {
    this.id = this.route.snapshot.params['id'];
    this.group = this.route.snapshot.params['group'];
    if (this.group == 'instructor') {
      this.lessons = this.dataService.getLessonsForInstructorId(this.id);
    } else if (this.group == 'user') {
      this.lessons = this.dataService.getLessonsForUserId(this.id);
    }
  }

  newLessonAdded() {
    this.fetchLessons();
  }

  ToggleCalendar() {
    this.calendarActive = !this.calendarActive;
  }
  getUserName(): string {
    if (this.group == 'user') {
      this.user = this.dataService.getUsers().find(_ => _.id == this.id);
      return (this.user != null ? this.user.name : '');
    }
    else if (this.group == 'instructor') {
      this.user = this.dataService.getInstructors().find(_ => _.id == this.id);
      return (this.user != null ? this.user.name : '');
    }
  }
  setLessonDetails(id: number) {
    this.selectedLesson = this.dataService.getLessonFromId(id);
    this.details.lesson = this.selectedLesson;
  }
}
