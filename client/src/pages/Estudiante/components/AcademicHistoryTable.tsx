import { FC, ReactNode } from "react";
import { Course } from "../../../types/index.ts";

interface AcademyHistoryTableProps {
  DropdownHistorial: FC<{ children: ReactNode }>;
  courses: Course[];
  average: number;
}

const AcademicHistoryTable: FC<AcademyHistoryTableProps> = ({ DropdownHistorial, courses, average }) => {
  return (
    <div>
      {/* Encabezado historial académico */}
      <div className="flex items-center justify-between mb-[10px]">
        <h2 className="text-h3 font-bold">Historial Académico</h2>
        <DropdownHistorial>Periodo</DropdownHistorial>
      </div>

      {/* Tabla de notas */}
      <table className="w-full text-center mb-[76px]">
        <thead className="text-black-2 font-bold">
          <tr className="rounded-lg overflow-hidden">
            <th className="bg-brand-secondary pl-[200px] py-6 rounded-s-lg">Asignatura</th>
            <th className="bg-brand-secondary py-6">Calificación</th>
            <th className="bg-brand-secondary pr-[200px] py-6 rounded-e-lg">Docente</th>
          </tr>
        </thead>
        <tbody>
          {
            courses?.map((course) => (
              <tr className="even:bg-white-1 odd:bg-white-2" key={course.id}>
                <td className="py-[25px] px-[10px] pl-[200px]">{course.name}</td>
                <td className="py-[25px] px-[10px]">{course.average}</td>
                <td className="py-[25px] px-[10px] pr-[200px]">{course.teacher?.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <section className="mx-auto w-max rounded-lg border-brand-primary border py-2 px-8">
        <span className="text-brand-primary font-bold text-lg">
          Promedio del Periodo {average}
        </span>
      </section>
    </div>
  )
}
export default AcademicHistoryTable
