import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEMO_DOCENTE } from "../constants.ts";
import { RootState } from "../app/store.ts";
import { handleSetUser } from "../features/authSlice.ts";
import { getTeacherById } from "../services/teacher.ts";

export default function useDocente() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user, decodedToken, token } = useSelector(
    (state: RootState) => state.authentication
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetUser = async () => {
      try {
        setIsLoading(true);
        if (!decodedToken?.id) {
          throw new Error("ID del token no encontrado");
        }
        const userData = await getTeacherById(decodedToken.id);
        dispatch(handleSetUser(userData));
      } catch (error) {
        setError("Error al obtener el usuario: " + error);
        console.error("Error al obtener el usuario:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!token || !decodedToken?.id) {
      dispatch(handleSetUser(DEMO_DOCENTE));
      return;
    }

    handleGetUser();
  }, [dispatch, decodedToken, token]);

  return { user, isLoading, error };
}
