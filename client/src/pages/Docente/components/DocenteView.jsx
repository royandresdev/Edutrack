import StudentGradesContainer from "../containers/StudentGradesContainer";
import GradeFilter from "./GradeFilter";

const DocenteView = ({ user }) => {
  const { fullName, profileImageUrl, userId, subjects } = user

  return (
    <div id="docente" className="max-w-[1216px] m-auto">
      {/* Datos del Docente */}
      <div className="grid grid-cols-2 gap-8 my-[72px]">
        {/* Card izquierda */}
        <div className="card border border-brand-primary w-full flex">
          { /* Foto de perfil del docente */}
          <img className="max-h-[174px] max-w-[200px] object-cover" src={profileImageUrl} alt="Perfil Docente" />

          {/* Datos personales */}
          <div className="p-10">
            <p className="font-bold text-grey-1 text-2xl leading-4">Docente</p>
            <p className="font-bold text-3xl text-brand-primary">{fullName}</p>
            <p className="font-bold text-xl text-grey-1">ID <span className="text-brand-primary">{userId}</span></p>
          </div>
        </div>

        {/* Card derecha */}
        <div className="card border border-brand-primary flex items-center px-6 justify-between">
          <div>
            <p className="text-grey-1 font-bold text-xl">Institución</p>
            <p>Colegio Alemán</p>
          </div>
          <div>
            <p className="text-grey-1 font-bold text-xl">Periodo Actual</p>
            <p>2024-3</p>
          </div>
          <div>
            <p className="text-grey-1 font-bold text-xl">Asignaturas</p>
            <p>1</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="space-y-6 mb-6">
        <h2 className="text-4xl font-bold">Califique y Retroalimente a sus Estudiantes</h2>
        <GradeFilter subjects={subjects} />
        <h3 className=" text-grey-1 text-2xl font-bold">2024-3 / Educación Física / 7A Bachillerato</h3>
      </div>

      {/* Lista de Estudiantes */}
      <StudentGradesContainer />
    </div>
  );
};
export default DocenteView;
