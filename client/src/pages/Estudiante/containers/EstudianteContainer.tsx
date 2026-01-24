import Student from "../Student.tsx";
import { useDashboard, useStudent } from "../../../hooks/index.js";

const EstudianteContainer = () => {
  const { student } = useStudent();
  const { dashboard, average } = useDashboard();

  return student?.id && dashboard ? (
    <Student
      student={student}
      dashboard={dashboard}
      average={average}
    />
  ) : (
    <p>No se encontró información del usuario.</p>
  );
};

export default EstudianteContainer;
