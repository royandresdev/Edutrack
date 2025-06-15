import { DEMO_PERIODS } from "../../../constants";
import AcademicHistoryContainer from "../containers/AcademicHistoryContainer";
import StudentDataTable from "./StudentDataTable";
import TeacherCommentsSection from "./TeacherCommentsSection";

const EstudianteView = ({ user, courses, average }) => {
  return (
    <div className="max-w-[1281px] mx-auto">
      <section className="py-10 sm:py-10">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {/* Contenedor Izquierdo (Card 1) */}
          <div className="w-[592px] h-[174px] p-1 flex items-center card">
            <img
              src={user?.profileImageUrl}
              alt={`Imagen del perfil del estudiante ${user?.fullName}`}
              className="w-[200px] h-[170px] object-cover"
            />
            <div className="p-4 flex-1 text-left">
              <h2 className="text-[24px] font-bold text-black">Estudiante</h2>
              <p className="text-[32px] text-brand-primary font-bold">
                {user?.fullName}
              </p>
              <p className="font-bold">
                ID: <span className="text-brand-primary">{user?.userId}</span>
              </p>
            </div>
          </div>

          {/* Contenedor Derecho (Card 2) */}
          <div className="w-full lg:w-[592px] min-h-[174px] card p-4">
            <StudentDataTable
              rows={[
                { header: "Institución", data: user?.institution },
                { header: "Periodo Actual", data: user?.period },
                { header: "Tutor", data: user?.tutor },
                { header: "Curso", data: user?.grade },
                { header: "Asignaturas", data: courses?.length },
                { header: "Correo", data: user?.email },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto">
        <AcademicHistoryContainer courses={courses} listPeriod={DEMO_PERIODS} />
        <section className="mx-auto w-max rounded-lg border-brand-primary border py-2 px-8">
          <span className="text-brand-primary font-bold text-lg">
            Promedio del Periodo {average}
          </span>
        </section>

        {courses && <TeacherCommentsSection courses={courses} />}
      </section>
    </div>
  );
};

export default EstudianteView;
