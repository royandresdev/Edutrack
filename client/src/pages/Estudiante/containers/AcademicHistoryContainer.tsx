import AcademicHistoryTable from "../components/AcademicHistoryTable.tsx";
import useDropdown from "../../../hooks/useDropdown.tsx";
import { DEMO_PERIODS } from "../../../constants.ts";
import { FC } from "react";
import { Course } from "../../../types/index.ts";

interface AcademicHistoryContainerProps {
  courses: Course[];
  average: number;
}
const AcademicHistoryContainer: FC<AcademicHistoryContainerProps> = ({ courses, average }) => {
  const { Component: DropdownHistorial } = useDropdown(
    "Dropdown_Historial",
    DEMO_PERIODS.map((period) => period.name),
  );

  return courses && courses.length > 0 ? (
    <AcademicHistoryTable
      DropdownHistorial={DropdownHistorial}
      courses={courses}
      average={average}
    />
  ) : <p>No se encontró información del historial académico.</p>;
};

export default AcademicHistoryContainer;
