import { Injectable } from '@angular/core';
import { Lesson } from './lesson';
import { USERS, INSTRUCTORS, LESSONS } from './mockData';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  users = USERS;
  instructors = INSTRUCTORS;
  lessons = LESSONS;

  getUsers()        { return this.users; }
  getInstructors()  { return this.instructors; }
  getLessons()      { return this.lessons; }

  getLessonsForUserId(user_id: number): Lesson[] {
    return this.lessons.filter(lesson => lesson.user_id == user_id);
  }

  getLessonsForInstructorId(instructor_id: number): Lesson[] {
    return this.lessons.filter(lesson => lesson.instructor_id == instructor_id);
  }

  addLesson(id: number, name: string, user_id: number, instructor_id: number, start_time: number, end_time: number) {
    // Create new lesson, store for reference
    let newLesson = { id, name, user_id, instructor_id, start_time, end_time };

    // Check for overlaps on a per-instructor basis
    let overlaps = this.lessons.filter(function (x) {
      return (x.instructor_id == newLesson.instructor_id || x.user_id == newLesson.user_id) &&
          ((  x.start_time < newLesson.start_time && x.end_time > newLesson.start_time)
          || (x.start_time < newLesson.end_time   && x.end_time > newLesson.end_time)
          || (x.start_time > newLesson.start_time && x.end_time < newLesson.end_time))
        });

    // Console logging 
    // - Number of overlaps
    // - What pre-existing lesson is causing the overlap
    if (overlaps.length > 0) {
      console.log("Overlap.length = " + overlaps.length);
      overlaps.forEach(y => console.log("Overlap with ID: " + y.id));
      return;
    }

    else {
      this.lessons.push(newLesson);
    }
  }
}