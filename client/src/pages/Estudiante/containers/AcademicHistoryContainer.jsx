import AcademicHistoryTable from "../components/AcademicHistoryTable"
import useDropdown from '../../../hooks/useDropdown';

const AcademicHistoryContainer = ({ courses, listPeriod }) => {
  const { DropdownComponent: DropdownHistorial } = useDropdown(
    "Dropdown_Historial",
    "Dropdown_Historial",
    listPeriod.map((period) => period.name),
  );

  return <AcademicHistoryTable DropdownHistorial={DropdownHistorial} courses={courses} />
}
export default AcademicHistoryContainer
