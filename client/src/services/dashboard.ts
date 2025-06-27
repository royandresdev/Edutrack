import { DEMO_DASHBOARD } from "../constants.ts";
import { Dashboard } from "../types/index.ts";

export async function getDashboard(studentId: string): Promise<Dashboard> {
  // Simulación de una llamada a una API, se reemplazara con una llamada real
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DEMO_DASHBOARD);
    }, 1000);
  });
}
