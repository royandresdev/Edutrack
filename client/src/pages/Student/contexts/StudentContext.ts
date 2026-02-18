import { createContext, useContext } from "react";
import { StudentContextValues } from "../types/index.ts";

export const StudentContext = createContext<StudentContextValues>({
  type: "",
  data: null,
  dashboard: null,
});

export const useStudentContext = () => useContext(StudentContext);
