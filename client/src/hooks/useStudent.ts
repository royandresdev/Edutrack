import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEMO_STUDENT } from "../constants.ts";
import { RootState } from "../app/store.ts";
import { getStudentById } from "../services/student.ts";
import { handleSetUser } from "../features/authSlice.ts";
import { Student } from "../pages/Estudiante/types/index.ts";

const useStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { token, decodedToken, user } = useSelector(
    (state: RootState) => state?.authentication
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetUser = async () => {
      try {
        setIsLoading(true);
        if (!decodedToken?.id) {
          throw new Error("ID del token no encontrado");
        }
        const userData = await getStudentById(decodedToken.id);
        dispatch(handleSetUser(userData));
      } catch (error) {
        setError("Error al obtener el usuario: " + error);
        console.error("Error al obtener el usuario:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!token || !decodedToken?.id) {
      dispatch(handleSetUser(DEMO_STUDENT));
      return;
    }

    handleGetUser();
  }, [token, decodedToken, dispatch]);

  const student = user as Student;

  return { student, isLoading, error };
};

export default useStudent;
