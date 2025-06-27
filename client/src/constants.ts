import { Dashboard, Student, Teacher } from "./types/index.ts";

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

export const DEMO_STUDENT: Student = {
  id: "demo123",
  fullName: "Pedro Demo",
  email: "demo@example.com",
  phone: "1234567890",
  role: "STUDENT",
  profileImageUrl: "/user_placeholder.webp",
  tutorResume: {
    id: "tutor123",
    fullName: "María Demo",
  },
  period: "2025 - 1",
  institution: "Colegio Demo",
  grade: "11A Bachillerato",
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

export const DEMO_DASHBOARD: Dashboard = {
  courses: [
    {
      id: "101",
      name: "Matemáticas",
      average: 85,
      teacher: {
        id: "101",
        name: "Ana Torres",
      },
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
      teacher: {
        id: "102",
        name: "Luis Martínez",
      },
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
      teacher: {
        id: "103",
        name: "Carla Ruiz",
      },
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
    {
      id: "104",
      name: "Inglés",
      average: 88,
      teacher: {
        id: "104",
        name: "John Smith",
      },
      feedbacks: [
        {
          id: "204",
          teacherResume: {
            id: "104",
            name: "John Smith",
            subjectName: "Inglés",
            profileImageUrl: "/user_placeholder.webp",
          },
          text: "Buen progreso en la gramática.",
          date: "2024-06-07",
        },
      ],
    },
    {
      id: "105",
      name: "Arte",
      average: 92,
      teacher: {
        id: "105",
        name: "María López",
      },
      feedbacks: [
        {
          id: "205",
          teacherResume: {
            id: "105",
            name: "María López",
            subjectName: "Arte",
            profileImageUrl: "/user_placeholder.webp",
          },
          text: "Excelente creatividad en los proyectos.",
          date: "2024-06-06",
        },
      ],
    },
    {
      id: "106",
      name: "Educación Física",
      average: 80,
      teacher: {
        id: "106",
        name: "Carlos Pérez",
      },
      feedbacks: [
        {
          id: "206",
          teacherResume: {
            id: "106",
            name: "Carlos Pérez",
            subjectName: "Educación Física",
            profileImageUrl: "/user_placeholder.webp",
          },
          text: "Buen desempeño en las actividades deportivas.",
          date: "2024-06-05",
        },
      ],
    },
    {
      id: "107",
      name: "Química",
      average: 75,
      teacher: {
        id: "107",
        name: "Laura García",
      },
      feedbacks: [
        {
          id: "207",
          teacherResume: {
            id: "107",
            name: "Laura García",
            subjectName: "Química",
            profileImageUrl: "/user_placeholder.webp",
          },
          text: "Necesita mejorar en los cálculos químicos.",
          date: "2024-06-04",
        },
      ],
    },
    {
      id: "108",
      name: "Filosofía",
      average: 89,
      teacher: {
        id: "108",
        name: "Andrés Gómez",
      },
      feedbacks: [
        {
          id: "208",
          teacherResume: {
            id: "108",
            name: "Andrés Gómez",
            subjectName: "Filosofía",
            profileImageUrl: "/user_placeholder.webp",
          },
          text: "Excelente razonamiento en los debates.",
          date: "2024-06-03",
        },
      ],
    },
    {
      id: "109",
      name: "Geografía",
      average: 84,
      teacher: {
        id: "109",
        name: "Sofía Martínez",
      },
      feedbacks: [
        {
          id: "209",
          teacherResume: {
            id: "109",
            name: "Sofía Martínez",
            subjectName: "Geografía",
            profileImageUrl: "/user_placeholder.webp",
          },
          text: "Buen conocimiento de los mapas.",
          date: "2024-06-02",
        },
      ],
    },
    {
      id: "110",
      name: "Música",
      average: 91,
      teacher: {
        id: "110",
        name: "Javier Rodríguez",
      },
      feedbacks: [
        {
          id: "210",
          teacherResume: {
            id: "110",
            name: "Javier Rodríguez",
            subjectName: "Música",
            profileImageUrl: "/user_placeholder.webp",
          },
          text: "Excelente interpretación en el recital.",
          date: "2024-06-01",
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

export const LOCAL_STORAGE_KEYS = {
  LOCAL_STORAGE_ID_KEY: "ID",
};
