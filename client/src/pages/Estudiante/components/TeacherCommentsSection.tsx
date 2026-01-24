import { FC } from "react";
import { Course } from "../../../types/index.ts";
import CommentCard from "./CommentCard.jsx";
import { MessageSquare } from "lucide-react";

interface TeacherCommentsSectionProps {
  courses: Course[];
}

const TeacherCommentsSection: FC<TeacherCommentsSectionProps> = ({ courses }) => {
  return (
    <section className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-purple-100">
      <div className="space-y-4 mb-6" >
        <h2 className="text-2xl font-bold text-left">
          <span className="size-10 rounded-xl bg-brand-primary inline-flex items-center justify-center mr-3">
            <MessageSquare className="text-white size-5" />
          </span> Comentarios de los docentes
        </h2>
        <p className="text-center max-w-[816px] m-auto">
          En esta sección encontrará los comentarios y la retroalimentación
          proporcionada por los docentes. Aquí podrá revisar observaciones
          detalladas sobre el desempeño, áreas de mejora y recomendaciones.
        </p>
      </div >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
