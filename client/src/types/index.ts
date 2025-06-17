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

export interface Course {
  id: string;
  name: string;
  teachers: Teacher[];
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
