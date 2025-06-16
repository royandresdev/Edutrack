import AcademicHistoryTable from "../components/AcademicHistoryTable.jsx";
import useDropdown from "../../../hooks/useDropdown.tsx";

interface AcademicHistoryContainerProps {
  courses: { id: number; name: string }[];
  listPeriod: { name: string }[];
}

const AcademicHistoryContainer = ({ courses, listPeriod }: AcademicHistoryContainerProps) => {
  const { Component: DropdownHistorial } = useDropdown(
    "Dropdown_Historial",
    listPeriod.map((period) => period.name),
  );

  return <AcademicHistoryTable DropdownHistorial={DropdownHistorial} courses={courses} />;
};

export default AcademicHistoryContainer;
