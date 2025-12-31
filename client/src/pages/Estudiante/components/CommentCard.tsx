import { FC } from "react";
import { Feedback } from "../../../types/index.ts"
import { Calendar, User } from "lucide-react";

interface CommentCardProps {
  feedback: Feedback;
}

const CommentCard: FC<CommentCardProps> = ({ feedback }) => {
  return (
    <div className="bg-gradient-to-br bg-gray-50 rounded-xl p-5 border border-purple-100 hover:shadow-md hover:border-purple-200 transition-all duration-200 group">
      {/* Info del docente */}
      <div className="flex gap-[15px] items-center">
        <div className="size-12 rounded-full from-brand-primary to-brand-primary-dark bg-gradient-to-br flex items-center justify-center">
          <User className="size-6 text-white" />
        </div>
        <div className="space-y-1">
          <p className="font-bold text-black-2">{feedback?.teacherResume?.name}</p>
          <div className="text-brand-primary">
            <p className="text-sm text-brand-primary flex items-center gap-2">
              <span className="font-semibold">{feedback?.teacherResume?.subjectName}</span> • <Calendar className="inline-block size-3" /> {feedback?.date}
            </p>
          </div>
          {/* Comentario */}
          <p className="text-black-2">
            {feedback?.text}
          </p>
        </div>
      </div>
    </div>
  )
}
export default CommentCard
