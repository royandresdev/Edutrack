import { DEMO_DOCENTE } from "../constants.ts";
import { Teacher } from "../types/index.ts";

export async function getTeacherById(teacherId: string): Promise<Teacher> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DEMO_DOCENTE);
    }, 1000);
  });
}
