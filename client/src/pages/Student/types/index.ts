import { Course, Notification, User } from "../../../types/index.ts";

export interface Student extends User {
  tutorResume: {
    id: string;
    fullName: string;
  };
  period: string;
  institution: string;
  grade: string;
}

export interface StudentContextValues {
  type: "demo" | "real" | "";
  data: Student | null;
  dashboard: Dashboard | null;
}

export interface Dashboard {
  courses: Course[];
  notifications: Notification[];
  average: number;
}
