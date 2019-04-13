import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../lesson';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {
  instructor: User;
  instructor_id: number;
  lessons: Lesson[];
  my_percentage: number = 100;


  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.instructor_id = this.route.snapshot.params['id'];
    this.lessons = this.dataService.getLessonsForInstructorId(this.instructor_id);
  }

}
