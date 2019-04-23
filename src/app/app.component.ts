import { Component } from '@angular/core';
import { User } from './user';
import { DataService } from './data.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { slideInAnimation } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation,
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AppComponent {
  users: User[];
  instructors: User[];
  headerURL: '/src/assets/Banner.png';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
    this.instructors = this.dataService.getInstructors();
  }
}
