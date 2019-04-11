import { Component } from '@angular/core';
import { User } from './user';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[];
  instructors: User[];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.users = this.dataService.getUsers();
    this.instructors = this.dataService.getInstructors();
  }
}
