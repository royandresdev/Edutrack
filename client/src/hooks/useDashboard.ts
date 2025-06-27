import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DEMO_DASHBOARD } from "../constants.ts";
import { Dashboard } from "../types/index.ts";
import { RootState } from "../app/store.ts";
import { getDashboard } from "../services/dashboard.ts";

const useDashboard = () => {
  const { decodedToken, token } = useSelector(
    (state: RootState) => state.authentication
  );
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const handleGetDashboard = async () => {
      try {
        if (!decodedToken?.id) {
          throw new Error("ID del token no encontrado");
        }
        const dashboardData = await getDashboard(decodedToken.id);
        setDashboard(dashboardData);
        setAverage(
          dashboardData.courses.reduce(
            (acc, course) => acc + course.average,
            0
          ) / dashboardData.courses.length
        );
      } catch (error) {
        console.error("Error al obtener el dashboard:", error);
        throw new Error("Error al obtener el dashboard: " + error);
      }
    };

    if (!token || !decodedToken?.id) {
      setDashboard(DEMO_DASHBOARD);
      setAverage(
        DEMO_DASHBOARD.courses.reduce(
          (acc, course) => acc + course.average,
          0
        ) / DEMO_DASHBOARD.courses.length
      );
      return;
    }

    handleGetDashboard();
  }, [decodedToken, token]);

  return { dashboard, average };
};

export default useDashboard;
