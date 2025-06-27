import EstudianteView from "../components/EstudianteView.jsx";
import { useDashboard, useStudent } from "../../../hooks/index.js";

const EstudianteContainer = () => {
  const { student } = useStudent();
  const { dashboard, average } = useDashboard();

  return student?.id && dashboard ? (
    <EstudianteView
      student={student}
      dashboard={dashboard}
      average={average}
    />
  ) : (
    <p>No se encontró información del usuario.</p>
  );
};

export default EstudianteContainer;
