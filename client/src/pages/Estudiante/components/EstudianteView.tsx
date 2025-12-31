import { FC } from "react";
import { Dashboard, Student } from "../../../types/index.ts";
import AcademicHistoryContainer from "../containers/AcademicHistoryContainer.tsx";
import StudentDataTable from "./StudentDataTable.tsx";
import TeacherCommentsSection from "./TeacherCommentsSection.tsx";
import { User } from "lucide-react";

interface EstudianteViewProps {
  student: Student;
  dashboard: Dashboard;
  average: number;
}

const EstudianteView: FC<EstudianteViewProps> = ({ student, dashboard, average }) => {
  return (
    <div className="max-w-7xl py-8 px-6 md:px-12 mx-auto space-y-6">
      <section>
        <div className="flex flex-col lg:flex-row gap-2 justify-between bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-purple-100">
          {/* Contenedor Izquierdo (Card 1) */}
          <div className="p-1 flex items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-full flex items-center justify-center shadow-lg">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="p-4 flex-1 text-left">
              <p className="text-2xl text-black-2 font-bold">
                {student?.fullName}
              </p>
              <p className="text-brand-primary">
                ID: {student?.id}
              </p>
            </div>
          </div>

          {/* Contenedor Derecho (Card 2) */}
          <div className="w-full lg:w-2/3 p-4">
            <StudentDataTable
              data={[
                { title: "Institución", data: student?.institution },
                { title: "Periodo Actual", data: student?.period },
                { title: "Tutor", data: student?.tutorResume.fullName },
                { title: "Curso", data: student?.grade },
                { title: "Asignaturas", data: dashboard?.courses.length },
                { title: "Correo", data: student?.email },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto space-y-6">
        <AcademicHistoryContainer courses={dashboard.courses} average={average} />
        <TeacherCommentsSection courses={dashboard.courses} />
      </section>
    </div>
  );
};

export default EstudianteView;
