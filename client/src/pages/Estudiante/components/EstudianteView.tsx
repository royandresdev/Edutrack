import { FC } from "react";
import { Dashboard, Student } from "../../../types/index.ts";
import AcademicHistoryContainer from "../containers/AcademicHistoryContainer.tsx";
import StudentDataTable from "./StudentDataTable.jsx";
import TeacherCommentsSection from "./TeacherCommentsSection.tsx";

interface EstudianteViewProps {
  student: Student;
  dashboard: Dashboard;
  average: number;
}

const EstudianteView: FC<EstudianteViewProps> = ({ student, dashboard, average }) => {
  return (
    <div className="max-w-[1281px] mx-auto">
      <section className="py-10 sm:py-10">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {/* Contenedor Izquierdo (Card 1) */}
          <div className="w-[592px] h-[174px] p-1 flex items-center card">
            <img
              src={student?.profileImageUrl}
              alt={`Imagen del perfil del estudiante ${student?.fullName}`}
              className="w-[200px] h-[170px] object-cover"
            />
            <div className="p-4 flex-1 text-left">
              <h2 className="text-[24px] font-bold text-black">Estudiante</h2>
              <p className="text-[32px] text-brand-primary font-bold">
                {student?.fullName}
              </p>
              <p className="font-bold">
                ID: <span className="text-brand-primary">{student?.id}</span>
              </p>
            </div>
          </div>

          {/* Contenedor Derecho (Card 2) */}
          <div className="w-full lg:w-[592px] min-h-[174px] card p-4">
            <StudentDataTable
              rows={[
                { header: "Institución", data: student?.institution },
                { header: "Periodo Actual", data: student?.period },
                { header: "Tutor", data: student?.tutorResume.fullName },
                { header: "Curso", data: student?.grade },
                { header: "Asignaturas", data: dashboard?.courses.length },
                { header: "Correo", data: student?.email },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto">
        <AcademicHistoryContainer courses={dashboard.courses} average={average} />
        <TeacherCommentsSection courses={dashboard.courses} />
      </section>
    </div>
  );
};

export default EstudianteView;
