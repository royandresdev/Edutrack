import AcademicHistoryTable from "../components/AcademicHistoryTable.tsx";
import useDropdown from "../../../hooks/useDropdown.tsx";
import { Course } from "../../../types/index.ts";

interface AcademicHistoryContainerProps {
  courses: Course[];
  listPeriod: { name: string }[];
}

const AcademicHistoryContainer = ({ courses, listPeriod }: AcademicHistoryContainerProps) => {
  const { Component: DropdownHistorial } = useDropdown(
    "Dropdown_Historial",
    listPeriod.map((period) => period.name),
  );

  return <AcademicHistoryTable DropdownHistorial={DropdownHistorial} Courses={courses} />;
};

export default AcademicHistoryContainer;
