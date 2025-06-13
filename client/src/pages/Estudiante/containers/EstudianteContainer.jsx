/* import { useEffect, useState } from "react"; */
import EstudianteView from "../components/EstudianteView";
/* import { getDashboard } from "../services"; */
import { useDashboard, useUser } from "../../../hooks";

const EstudianteContainer = () => {
  const { user } = useUser();
  const { average, dashboard } = useDashboard();


  return user || user?.id ? (
    <EstudianteView
      user={user} courses={dashboard?.Courses} average={average}
    />
  ) : (
    <p>No se encontró información del usuario.</p>
  );
};

export default EstudianteContainer;
