import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../lesson';
import { state, style, transition, animate } from '@angular/animations';
import { log } from 'util';
@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent implements OnInit {
  id: number;
  group: string;
  lessons: Lesson[];
  calendarActive = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fetchLessons();
  }

  fetchLessons() {
    this.id = this.route.snapshot.params['id'];
    this.group = this.route.snapshot.params['group'];
    if (this.group == 'instructor') {
      this.lessons = this.dataService.getLessonsForInstructorId(this.id);
    } else if (this.group = 'user') {
      this.lessons = this.dataService.getLessonsForUserId(this.id);
    }
  }

  newLessonAdded() {
    this.fetchLessons();
  }

  ToggleCalendar() {
    this.calendarActive = !this.calendarActive;
  }
}
