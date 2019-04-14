import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../lesson';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  id: number;
  group: string;
  lessons: Lesson[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.group = this.route.snapshot.params['group'];
    if (this.group == 'instructor') {
      this.lessons = this.dataService.getLessonsForInstructorId(this.id);
    } else if (this.group = 'user') {
      this.lessons = this.dataService.getLessonsForUserId(this.id);
    }
    
  }
}
