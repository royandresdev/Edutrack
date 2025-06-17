import { Dashboard } from "./types/index.ts";

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

export const DEMO_STUDENT = {
  userId: "demo123",
  fullName: "Pedro Demo",
  tutor: "Ana Demo",
  period: "2025 - 1",
  institution: "Colegio Demo",
  grade: "11A Bachillerato",
  email: "demo@example.com",
  phoneNumber: "1234567890",
  role: ROLES.ESTUDIANTE,
  profileImageUrl: "/user_placeholder.webp",
};

export const DEMO_DOCENTE = {
  fullName: "José Alba",
  userId: 1124743862,
  profileImageUrl: "/user_placeholder.webp",
  email: "jose.alba@example.com",
  phoneNumber: "9876543210",
  role: ROLES.DOCENTE,
  subjects: ["Educación Física", "Matemáticas", "Ciencias Naturales"],
};

export const DEMO_PERIODS = [{ id: 1, name: "2025 - 1" }];

export const DEMO_DASHBOARD: Dashboard = {
  Courses: [
    {
      id: "101",
      name: "Matemáticas",
      average: 85,
      feedbacks: [
        {
          id: "201",
          teacherResume: {
            id: "101",
            name: "Ana Torres",
            subjectName: "Matemáticas",
            profileImageUrl: "/user_placeholder.webp",
          },
          text: "Buen desempeño en el último examen.",
          date: "2024-06-10",
        },
      ],
    },
    {
      id: "102",
      name: "Historia",
      average: 90,
      feedbacks: [
        {
          id: "202",
          teacherResume: {
            id: "102",
            name: "Luis Martínez",
            subjectName: "Historia",
            profileImageUrl: "/user_placeholder.webp",
          },
          text: "Excelente análisis en el último ensayo.",
          date: "2024-06-09",
        },
      ],
    },
    {
      id: "103",
      name: "Ciencias",
      average: 78,
      feedbacks: [
        {
          id: "203",
          teacherResume: {
            id: "103",
            name: "Carla Ruiz",
            subjectName: "Ciencias",
            profileImageUrl: "/user_placeholder.webp",
          },
          text: "Necesita mejorar en los experimentos de laboratorio.",
          date: "2024-06-08",
        },
      ],
    },
  ],
  notifications: [
    {
      id: "301",
      message: "Tienes una nueva tarea en Matemáticas.",
      date: "2024-06-10",
    },
    {
      id: "302",
      message: "Revisión de examen de Historia disponible.",
      date: "2024-06-09",
    },
  ],
};
