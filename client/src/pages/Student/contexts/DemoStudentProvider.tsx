import { FC, ReactNode, useState } from "react";
import { StudentContext } from "./StudentContext.ts"
import { demoDashboard, demoStudent } from "../data/demo.ts";
import { StudentContextValues } from "../types/index.ts";

interface DemoStudentProviderProps {
  children: ReactNode;
}

const defaultStudentContextValue: StudentContextValues = {
  type: "demo",
  data: demoStudent,
  dashboard: demoDashboard,
};


const DemoStudentProvider: FC<DemoStudentProviderProps> = ({ children }) => {
  const [student] = useState(defaultStudentContextValue);

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  )
}
export default DemoStudentProvider
