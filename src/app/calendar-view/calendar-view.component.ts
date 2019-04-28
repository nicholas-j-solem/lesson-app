import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../lesson';
import { trigger } from '@angular/animations';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent {
  @Input() lessons: Lesson[];
  instructor: User;
  id: number;
  my_percentage: number = 100;
  details: LessonDetailsComponent;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  timeDisplay(time: number) {
    return (time % 12 == 0 ? 12 : time % 12) + (time < 12 ? 'am' : 'pm')
  }
  setLesson(lesson_id: number) {
    this.details = new LessonDetailsComponent(this.dataService);
    this.details.lesson = this.dataService.getLessonFromId(lesson_id);
  }
}
