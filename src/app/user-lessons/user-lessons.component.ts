import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../lesson';

@Component({
  selector: 'app-user-lessons',
  templateUrl: './user-lessons.component.html',
  styleUrls: ['./user-lessons.component.scss']
})
export class UserLessonsComponent implements OnInit {
  user: User;
  user_id: number;
  lessons: Lesson[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user_id = this.route.snapshot.params['id'];
    this.lessons = this.dataService.getLessonsForUserId(this.user_id);
  }

}
