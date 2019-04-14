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
  id: number;
  lessons: Lesson[];
  my_percentage: number = 100;


  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    let x = this.route.snapshot.url[0].path;

    if (x == 'instructor') {
      this.lessons = this.dataService.getLessonsForInstructorId(this.id);
    } else if (x == 'user') {
      this.lessons = this.dataService.getLessonsForUserId(this.id);
    } else {
      console.log('eat my ass');

    }
    
  }

}
