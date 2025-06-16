import useDropdown from "../../../hooks/useDropdown.tsx";

interface GradeFilterProps {
  subjects: string[];
}

const GradeFilter = ({ subjects }: GradeFilterProps) => {
  const { Component: DropdownPeriod } = useDropdown('period', ['2024-3']);
  const { Component: DropdownSubject } = useDropdown('subject', subjects);
  const { Component: DropdownCourse } = useDropdown('course', ['7A Bachillerato']);

  return (
    <form className="bg-brand-secondary flex py-4 px-8 gap-4 rounded-lg">
      <DropdownPeriod className="bg-white-2 !text-black-2">Periodo</DropdownPeriod>
      <DropdownSubject className="bg-white-2 !text-black-2">Asignatura</DropdownSubject>
      <DropdownCourse className="bg-white-2 !text-black-2">Curso</DropdownCourse>
      <button type="submit" className="bg-brand-primary text-white-2 py-2 px-8 rounded-lg ml-auto font-bold">Buscar</button>
    </form>
  );
};

export default GradeFilter;
