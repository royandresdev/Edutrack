import { FC } from "react";
import { Course } from "../../../types/index.ts";
import CommentCard from "./CommentCard.jsx";

interface TeacherCommentsSectionProps {
  courses: Course[];
}

const TeacherCommentsSection: FC<TeacherCommentsSectionProps> = ({ courses }) => {
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
      <div className="grid grid-cols-2 gap-8">
        {
          courses ? courses.flatMap((course) => course.feedbacks.map((feedback) => (
            <CommentCard key={feedback.id} feedback={feedback} />
          ))) : <p>No hay comentarios disponibles.</p>
        }
      </div>
    </section>
  );
};

export default TeacherCommentsSection;
