import { DEMO_STUDENT } from "../constants.ts";
import { Student } from "../types/index.ts";

export async function getStudentById(id: string): Promise<Student> {
  // Se reemplazara con una llamada a la API real

  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(DEMO_STUDENT);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}
