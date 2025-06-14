import { useDocente } from "../../../hooks"
import DocenteView from "../components/DocenteView"

const DocenteContainer = () => {
  const { user } = useDocente();

  return (
    user ? <DocenteView user={user} /> : <p>No se encontró información del docente.</p>
  )
}
export default DocenteContainer
