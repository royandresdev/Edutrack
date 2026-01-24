export type Status = "ONLINE" | "OFFLINE" | "DEMO";
export type Roles = "TUTOR" | "STUDENT" | "TEACHER";

export interface DecodedToken {
  id: string;
}
export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: Roles;
  profileImageUrl: string;
}

export interface Teacher extends User {
  subjects: string[];
}

export interface Period {
  id: string;
  name: string;
}

export interface Feedback {
  id: string;
  teacherResume: TeacherInFeedback;
  text: string;
  date: string;
}

export interface TeacherInFeedback {
  id: string;
  name: string;
  subjectName: string;
  profileImageUrl: string;
}

export interface Course {
  id: string;
  average: number;
  name: string;
  feedbacks: Feedback[];
  teacher?: TeacherInCourse;
}

interface TeacherInCourse {
  id: string;
  name: string;
}

export interface Notification {
  id: string;
  message: string;
  date: string;
}
