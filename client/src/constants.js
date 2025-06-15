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

export const DEMO_DASHBOARD = {
  Courses: [
    {
      id: 101,
      subjectName: "Matemáticas",
      teachers: [
        {
          id: 201,
          teacherName: "Ana Gómez",
          gradeValue: 85,
          subjectName: "Matemáticas",
          profileImageUrl: "/user_placeholder.webp",
          feedback: {
            feedbackText: "Buen trabajo en los últimos ejercicios.",
            feedbackDate: "2024-06-10",
          },
        },
      ],
    },
    {
      id: 102,
      subjectName: "Historia",
      teachers: [
        {
          id: 202,
          teacherName: "Luis Martínez",
          gradeValue: 90,
          subjectName: "Historia",
          profileImageUrl: "/user_placeholder.webp",
          feedback: {
            feedbackText: "Excelente análisis en el último ensayo.",
            feedbackDate: "2024-06-09",
          },
        },
      ],
    },
    {
      id: 103,
      subjectName: "Ciencias",
      teachers: [
        {
          id: 203,
          teacherName: "Carla Ruiz",
          gradeValue: 78,
          subjectName: "Ciencias",
          profileImageUrl: "/user_placeholder.webp",
          feedback: {
            feedbackText:
              "Necesita mejorar en los experimentos de laboratorio.",
            feedbackDate: "2024-06-08",
          },
        },
      ],
    },
    {
      id: 104,
      subjectName: "Inglés",
      teachers: [
        {
          id: 204,
          teacherName: "John Smith",
          gradeValue: 88,
          subjectName: "Inglés",
          profileImageUrl: "/user_placeholder.webp",
          feedback: {
            feedbackText: "Buen progreso en la gramática.",
            feedbackDate: "2024-06-07",
          },
        },
      ],
    },
    {
      id: 105,
      subjectName: "Arte",
      teachers: [
        {
          id: 205,
          teacherName: "María López",
          gradeValue: 92,
          subjectName: "Arte",
          profileImageUrl: "/user_placeholder.webp",
          feedback: {
            feedbackText: "Excelente creatividad en los proyectos.",
            feedbackDate: "2024-06-06",
          },
        },
      ],
    },
    {
      id: 106,
      subjectName: "Educación Física",
      teachers: [
        {
          id: 206,
          teacherName: "Carlos Pérez",
          gradeValue: 80,
          subjectName: "Educación Física",
          profileImageUrl: "/user_placeholder.webp",
          feedback: {
            feedbackText: "Buen desempeño en las actividades deportivas.",
            feedbackDate: "2024-06-05",
          },
        },
      ],
    },
    {
      id: 107,
      subjectName: "Química",
      teachers: [
        {
          id: 207,
          teacherName: "Laura García",
          gradeValue: 75,
          subjectName: "Química",
          profileImageUrl: "/user_placeholder.webp",
          feedback: {
            feedbackText: "Necesita mejorar en los cálculos químicos.",
            feedbackDate: "2024-06-04",
          },
        },
      ],
    },
    {
      id: 108,
      subjectName: "Filosofía",
      teachers: [
        {
          id: 208,
          teacherName: "Andrés Gómez",
          gradeValue: 89,
          subjectName: "Filosofía",
          profileImageUrl: "/user_placeholder.webp",
          feedback: {
            feedbackText: "Excelente razonamiento en los debates.",
            feedbackDate: "2024-06-03",
          },
        },
      ],
    },
    {
      id: 109,
      subjectName: "Geografía",
      teachers: [
        {
          id: 209,
          teacherName: "Sofía Martínez",
          gradeValue: 84,
          subjectName: "Geografía",
          profileImageUrl: "/user_placeholder.webp",
          feedback: {
            feedbackText: "Buen conocimiento de los mapas.",
            feedbackDate: "2024-06-02",
          },
        },
      ],
    },
    {
      id: 110,
      subjectName: "Música",
      teachers: [
        {
          id: 210,
          teacherName: "Javier Rodríguez",
          gradeValue: 91,
          subjectName: "Música",
          profileImageUrl: "/user_placeholder.webp",
          feedback: {
            feedbackText: "Excelente interpretación en el recital.",
            feedbackDate: "2024-06-01",
          },
        },
      ],
    },
  ],
  notifications: [
    {
      id: 301,
      message: "Tienes una nueva tarea en Matemáticas.",
      date: "2024-06-10",
    },
    {
      id: 302,
      message: "Revisión de examen de Historia disponible.",
      date: "2024-06-09",
    },
  ],
};
