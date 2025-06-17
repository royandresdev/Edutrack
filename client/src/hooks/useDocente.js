import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decryptToken } from "../token";
import { getDocenteById } from "../pages/Docente/services";
import { setUser } from "../features/authSlice";
import { DEMO_DOCENTE } from "../constants.ts";

export default function useDocente() {
  const { user, mood } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetDocenteData = async () => {
      const userDataToken = decryptToken();
      const docenteId = userDataToken.id;
      console.log(userDataToken);
      try {
        const docenteFetchData = await getDocenteById(docenteId);
        dispatch(setUser(docenteFetchData));
      } catch (error) {
        console.log(error);
      }
    };

    if (mood === "DEMO" && user?.role !== "DOCENTE") {
      dispatch(setUser(DEMO_DOCENTE));
    } else if (!user && mood === "ONLINE") {
      handleGetDocenteData();
    }
  }, [dispatch, mood, user]);

  return { user };
}
