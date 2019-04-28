import { Component, OnInit } from '@angular/core';
import { Lesson } from '../lesson';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.scss']
})
export class LessonDetailsComponent implements OnInit {
  lesson: Lesson;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  getLesson(): Lesson{
return this.lesson;
  }
}
