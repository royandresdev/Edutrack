import { Teacher } from "./types/index.ts";

export const STATUS = {
  ONLINE: "ONLINE",
  OFFLINE: "OFFLINE",
  DEMO: "DEMO",
};

export const ROLES = {
  TUTOR: "TUTOR",
  ESTUDIANTE: "ESTUDIANTE",
  DOCENTE: "DOCENTE",
};

export const DEMO_DOCENTE: Teacher = {
  fullName: "José Alba",
  id: "1124743862",
  profileImageUrl: "/user_placeholder.webp",
  email: "jose.alba@example.com",
  phone: "9876543210",
  role: "TEACHER",
  subjects: ["Educación Física", "Matemáticas", "Ciencias Naturales"],
};

export const DEMO_PERIODS = [{ id: 1, name: "2025 - 1" }];

export const LOCAL_STORAGE_KEYS = {
  LOCAL_STORAGE_ID_KEY: "ID",
};
