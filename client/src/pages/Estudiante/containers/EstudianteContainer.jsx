/* import { useEffect, useState } from "react"; */
import EstudianteView from "../components/EstudianteView";
/* import { getDashboard } from "../services"; */
import { useUser } from "../../../hooks";

const EstudianteContainer = () => {
  /* const [dashboard, setDashboard] = useState(null);
  const [average, setAverage] = useState(0); */
  const { user } = useUser();

  /*   const fetchDashboard = async () => {
      try {
        const dashboardData = await getDashboard();
        setDashboard(dashboardData);
      } catch (error) {
        console.error("Error al obtener el dashboard:", error);
      }
    };
  
    const calculateAverage = () => {
      if (dashboard?.Courses?.length) {
        const sum = dashboard.Courses.reduce(
          (accumulator, currentValue) => accumulator + (currentValue.teachers[0]?.gradeValue || 0),
          0
        );
        setAverage(Math.round(sum / dashboard.Courses.length));
      } else {
        setAverage(0);
      }
    };
  
    useEffect(() => {
      fetchDashboard();
    }, []);
  
    useEffect(() => {
      calculateAverage();
    }, [dashboard]); */

  return user || user?.id ? (
    <EstudianteView
      user={user} /* courses={dashboard?.Courses} average={average} */
    />
  ) : (
    <p>No se encontró información del usuario.</p>
  );
};

export default EstudianteContainer;
