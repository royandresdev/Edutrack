export type Status = "ONLINE" | "OFFLINE" | "DEMO";
export type Roles = "TUTOR" | "ESTUDIANTE" | "DOCENTE";

export interface Student {
  id: string;
  fullName: string;
  tutorId: string;
  period: string;
  institution: string;
  grade: string;
  email: string;
  phone: string;
  role: Roles;
  profileImageUrl: string;
}

export interface Docente {
  fullName: string;
  id: string;
  profileImageUrl: string;
  email: string;
  phone: string;
  role: Roles;
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

export interface Teacher {
  id: string;
  name: string;
  grade: number;
  subject: string;
  profileImageUrl: string;
  feedback: Feedback;
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

export interface Dashboard {
  Courses: Course[];
  notifications: Notification[];
}
