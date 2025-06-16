import useDropdown from "../../../hooks/useDropdown.tsx";
import CommentCard from "./CommentCard.jsx";

interface TeacherCommentsSectionProps {
  courses: { id: number; name: string }[];
  listPeriod: { name: string }[];
}

const TeacherCommentsSection = ({ listPeriod }: TeacherCommentsSectionProps) => {
  const { Component: DropdownComentarios } = useDropdown(
    "Dropdown_Comentarios",
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
    </section>
  );
};

export default TeacherCommentsSection;
