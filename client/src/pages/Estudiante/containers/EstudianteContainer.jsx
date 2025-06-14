import EstudianteView from "../components/EstudianteView";
import { useDashboard, useUser } from "../../../hooks";

const EstudianteContainer = () => {
  const { user } = useUser();
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
