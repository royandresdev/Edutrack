import { FC, ReactNode } from "react";
import { Course } from "../../../types/index.ts";
import { Award, BookOpen } from "lucide-react";

interface AcademyHistoryTableProps {
  DropdownHistorial: FC<{ children: ReactNode }>;
  courses: Course[];
  average: number;
}

const AcademicHistoryTable: FC<AcademyHistoryTableProps> = ({ DropdownHistorial, courses, average }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-purple-100">
      {/* Encabezado historial académico */}
      <div className="sm:flex space-y-4 items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-brand-primary rounded-xl size-10 text-white flex items-center justify-center">
            <BookOpen className="size-5" />
          </div>
          <h2 className="text-2xl font-bold">Historial Académico</h2>
        </div>
        <DropdownHistorial>Periodo</DropdownHistorial>
      </div>

      {/* Tabla de notas */}
      <table className="w-full text-center border-separate border-spacing-y-2 mb-6">
        <thead className="hidden sm:table-header-group text-brand-primary">
          <tr className="bg-gradient-to-r from-purple-100 to-orange-100 overflow-hidden text-left">
            <th className="font-semibold py-4 rounded-s-lg pl-4">Asignatura</th>
            <th className="font-semibold py-4 text-center">Calificación</th>
            <th className="font-semibold py-4 rounded-e-lg">Docente</th>
          </tr>
        </thead>
        <tbody className="flex flex-col sm:table-row-group gap-4">
          {
            courses?.map((course) => (
              <tr className="flex flex-col sm:table-row gap-2 rounded-xl text-left bg-gray-50 p-4" key={course.id}>
                <td className="table-cell sm:pl-4 sm:py-4">
                  <span className="sm:hidden text-brand-primary font-semibold min-w-[100px] inline-block">Asignatura:</span> {course.name}
                </td>
                <td className={`table-cell font-bold sm:text-center
                   ${course.average >= 90 ? 'text-green-600' :
                    course.average >= 80 ? 'text-blue-600' :
                      course.average >= 70 ? 'text-orange-600' :
                        'text-red-600'
                  }
                  `}>
                  <span className="sm:hidden text-brand-primary font-semibold min-w-[100px] inline-block">Calificación:</span>   {course.average}
                </td>
                <td className="table-cell">
                  <span className="sm:hidden text-brand-primary font-semibold min-w-[100px] inline-block">Docente:</span> {course.teacher?.name}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <section className="mx-auto w-max rounded-xl bg-brand-primary py-4 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <p className="text-white font-bold text-lg flex items-center gap-2">
          <Award className="size-6" /> Promedio del Periodo {average}
        </p>
      </section>
    </div>
  )
}
export default AcademicHistoryTable
