import { useEffect, useState } from "react";
import { getDashboard } from "../pages/Estudiante/services/index.js";
import { useSelector } from "react-redux";
import { DEMO_DASHBOARD } from "../constants.ts";
import { Dashboard } from "../types/index.ts";
import { RootState } from "../app/store.ts";

const useDashboard = () => {
  const { mood } = useSelector((state: RootState) => state.authentication);
  const [dashboard, setDashboard] = useState<Dashboard>();
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
          (accumulator, currentValue) => accumulator + currentValue.average,
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
