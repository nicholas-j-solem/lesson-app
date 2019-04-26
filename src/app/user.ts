export enum UserType {
  Teacher = 1,
  Student,
}
export enum UserLevel {
  Expert = 0,
  Advanced,
  Intermediate,
  Beginner,
}
export class User {
  id: number;
  name: string;
  level: UserLevel;
  type: UserType;
  constructor() {
    this.level = (this.type === UserType.Teacher) ? UserLevel.Expert : UserLevel.Beginner;
  }
}
