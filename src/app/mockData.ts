import { User, UserType, UserLevel } from './user';
import { Lesson } from './lesson';

export const USERS: User[] = [
        { id: 1, name: 'Cody', type: UserType.Student, level: UserLevel.Advanced },
        { id: 4, name: 'Wyatt', type: UserType.Student, level: UserLevel.Beginner },
        { id: 2, name: 'Nick', type: UserType.Student, level: UserLevel.Intermediate},
        { id: 3, name: 'Philip', type: UserType.Student, level: UserLevel.Expert},
        { id: 5, name: 'Jeff', type: UserType.Student, level: UserLevel.Beginner },
        { id: 6, name: 'UnreasonaBilly Longname', type: UserType.Student, level: UserLevel.Advanced }, ]

export const INSTRUCTORS: User[] = [
    { id: 1, name: 'Admin', type: UserType.Teacher, level: UserLevel.Expert},
    { id: 2, name: 'nimdA', type: UserType.Teacher, level: UserLevel.Expert} ]

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
