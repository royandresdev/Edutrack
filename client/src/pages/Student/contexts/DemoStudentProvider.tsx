import { FC, ReactNode } from "react";
import { StudentContext } from "./StudentContext.ts"
import { demoDashboard, demoStudent } from "../data/demo.ts";
import { StudentContextValues } from "../types/index.ts";

interface DemoStudentProviderProps {
  children: ReactNode;
}

const defaultStudentContextValue: StudentContextValues = {
  type: "demo",
  student: demoStudent,
  dashboard: demoDashboard,
};


const DemoStudentProvider: FC<DemoStudentProviderProps> = ({ children }) => {
  return (
    <StudentContext.Provider value={defaultStudentContextValue}>
      {children}
    </StudentContext.Provider>
  )
}
export default DemoStudentProvider
