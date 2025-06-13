import { useEffect } from "react";
import { getUserById } from "../pages/Estudiante/services";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/authSlice";
import { DEMO_USER } from "../constants";

const LOCAL_STORAGE_ID_KEY = "id";

const useUser = () => {
  const { user, mood } = useSelector((state) => state?.authentication);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mood === "DEMO") {
      dispatch(setUser(DEMO_USER));
      return;
    }

    if (!user || !user.id) return;

    const fetchUser = async () => {
      try {
        const id = localStorage.getItem(LOCAL_STORAGE_ID_KEY);
        if (!id) throw new Error("ID de usuario no encontrado en localStorage");
        const userData = await getUserById(id);
        dispatch(setUser(userData));
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };

    if (!user.id) {
      fetchUser();
    }
  }, [dispatch, user, mood]);

  return { user, setUser };
};

export default useUser;
