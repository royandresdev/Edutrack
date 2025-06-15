import EstudianteView from "../components/EstudianteView";
import { useDashboard, useStudent } from "../../../hooks";

const EstudianteContainer = () => {
  const { user } = useStudent();
  const { average, dashboard } = useDashboard();

  return user?.userId ? (
    <EstudianteView
      user={user}
      courses={dashboard?.Courses}
      average={average}
    />
  ) : (
    <p>No se encontró información del usuario.</p>
  );
};

export default EstudianteContainer;
