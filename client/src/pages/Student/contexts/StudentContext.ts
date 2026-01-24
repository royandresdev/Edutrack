import { createContext } from "react";
import { StudentContextValues } from "../types/index.ts";

export const StudentContext = createContext<StudentContextValues>({
  type: "",
  student: null,
  dashboard: null,
});
