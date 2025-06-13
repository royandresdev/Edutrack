import { useEffect, useState } from "react";
import { getDashboard } from "../pages/Estudiante/services";
import { useSelector } from "react-redux";
import { DEMO_DASHBOARD } from "../constants";

const useDashboard = () => {
  const { mood } = useSelector((state) => state.authentication);
  const [dashboard, setDashboard] = useState(null);
  const [average, setAverage] = useState(0);

  const fetchDashboard = async () => {
    try {
      const dashboardData = await getDashboard();
      setDashboard(dashboardData);
    } catch (error) {
      console.error("Error al obtener el dashboard:", error);
    }
  };

  useEffect(() => {
    if (mood === "DEMO") {
      setDashboard(DEMO_DASHBOARD);
    } else if (mood === "ONLINE") {
      fetchDashboard();
    }
  }, [mood]);

  useEffect(() => {
    const calculateAverage = () => {
      if (dashboard?.Courses?.length) {
        const sum = dashboard.Courses.reduce(
          (accumulator, currentValue) =>
            accumulator + (currentValue.teachers[0]?.gradeValue || 0),
          0
        );
        setAverage(Math.round(sum / dashboard.Courses.length));
      } else {
        setAverage(0);
      }
    };

    calculateAverage();
  }, [dashboard]);

  return { dashboard, average };
};

export default useDashboard;
