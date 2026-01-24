import { FC } from "react";
import { Feedback } from "../../../types/index.ts"
import { Calendar, User } from "lucide-react";

interface CommentCardProps {
  feedback: Feedback;
}

const CommentCard: FC<CommentCardProps> = ({ feedback }) => {
  return (
    <article className="bg-gradient-to-br bg-gray-50 rounded-xl p-5 border border-purple-100 hover:shadow-md hover:border-purple-200 transition-all duration-200 group flex gap-4 items-center">
      {/* Info del docente */}
      <div className="size-12 rounded-full from-brand-primary to-brand-primary-dark bg-gradient-to-br flex items-center justify-center">
        <User className="size-6 text-white" />
      </div>
      <div className="space-y-1">
        <h3 className="font-bold text-black-2 text-base">{feedback?.teacherResume?.name}</h3>
        <div className="text-brand-primary">
          <time dateTime={feedback?.date} className="text-sm text-brand-primary flex items-center gap-2">
            <strong className="font-semibold">{feedback?.teacherResume?.subjectName}</strong> • <Calendar className="inline-block size-3" /> {feedback?.date}
          </time>
        </div>
        {/* Comentario */}
        <p className="text-black-2">
          {feedback?.text}
        </p>
      </div>

    </article>
  )
}
export default CommentCard
