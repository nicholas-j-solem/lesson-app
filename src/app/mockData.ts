import { User } from './user';
import { Lesson } from './lesson';

export const USERS: User[] = [ 
        { id: 1, name: 'Cody' },
        { id: 2, name: 'Nick' },
        { id: 3, name: 'Philip' } ]

export const INSTRUCTORS: User[] = [
    { id: 1, name: 'Admin' } ]

export const LESSONS: Lesson[] = [
        { id: 1,
          name: 'Small Group',
          user_id: 3,
          instructor_id: 1,
          start_time: 8,
          end_time: 9 },
        { id: 2,
          name: 'Other Group',
          user_id: 2,
          instructor_id: 1,
          start_time: 10,
          end_time: 12 },
        { id: 3,
          name: 'Large Group',
          user_id: 3,
          instructor_id: 1,
          start_time: 13,
          end_time: 15 } ]