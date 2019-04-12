import { Injectable } from '@angular/core';
import { User } from './user';
import { Lesson } from './lesson';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[] = [
    { id: 1, name: 'Cody' },
    { id: 2, name: 'Nick' },
    { id: 3, name: 'Philip' }
  ]

  instructors: User[] = [
    { id: 1, name: 'Admin' }
  ]

  lessons: Lesson[] = [
    {
      id: 1,
      name: 'Small Group',
      user_id: 1,
      instructor_id: 1,
      start_time: new Date(2019, 4, 10, 8),
      end_time: new Date(2019, 4, 10, 13)
    },
    {
      id: 2,
      name: 'Other Group',
      user_id: 2,
      instructor_id: 1,
      start_time: new Date(2019, 4, 10, 8),
      end_time: new Date(2019, 4, 10, 13)
    }
  ]

  getUsers() {
    return this.users;
  }

  getInstructors() {
    return this.instructors;
  }

  getLessons() {
    return this.lessons;
  }

  getLessonsForUserId(user_id: number): Lesson[] {
    return this.lessons.filter(lesson => lesson.user_id == user_id);
  }

  getLessonsForInstructorId(instructor_id: number): Lesson[] {
    return this.lessons.filter(lesson => lesson.instructor_id == instructor_id)
  }
}
