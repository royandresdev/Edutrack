import useDropdown from "../../../hooks/useDropdown";
import CommentCard from "./CommentCard";

const TeacherCommentsSection = ({ courses, listPeriod }) => {
  const { DropdownComponent: DropdownComentarios } = useDropdown(
    "Comentarios",
    "Comentarios",
    listPeriod.map((period) => period.name),
  );
  return (
    <section>
      <section className="space-y-4 pt-20 pb-10" >
        <h2 className="text-h3 font-bold text-center">
          Comentarios de los docentes
        </h2>
        <p className="text-center max-w-[816px] m-auto">
          En esta sección encontrará los comentarios y la retroalimentación
          proporcionada por los docentes. Aquí podrá revisar observaciones
          detalladas sobre el desempeño, áreas de mejora y recomendaciones.
        </p>
      </section >

      <section className="py-8">
        {/* Dropdown periodo escolar */}
        <div className="w-full flex justify-center mb-14">
          <DropdownComentarios>Periodo</DropdownComentarios>
        </div>

        {/* Lista de comentarios */}
        <div className="grid grid-cols-2 gap-8 px-[104px]">
          {
            courses?.map((course, index) => <CommentCard key={index} teacher={course.teachers[0]} />)
          }
        </div>
      </section>
    </section>
  )
}
export default TeacherCommentsSection
