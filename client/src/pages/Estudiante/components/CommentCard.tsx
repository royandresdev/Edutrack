import { FC } from "react";
import { Feedback } from "../../../types/index.ts"

interface CommentCardProps {
  feedback: Feedback;
}

const CommentCard: FC<CommentCardProps> = ({ feedback }) => {
  return (
    <div className="card border w-full border-brand-primary space-y-[13px] py-8 px-6 rounded-[22px] mx-auto bg-white">
      {/* Info del docente */}
      <div className="flex gap-[15px] items-center">
        <div className="size-[66px] rounded-lg border border-brand-primary bg-gray-300 overflow-hidden">
          <img src={feedback?.teacherResume?.profileImageUrl} alt="Foto del perfil del docente" />
        </div>
        <div className="space-y-2">
          <p className="text-xl font-bold text-brand-primary">{feedback?.teacherResume?.name}</p>
          <p className="text-grey-1 font-bold">
            {feedback?.teacherResume?.subjectName} <br />
            {feedback?.date}
          </p>
        </div>
      </div>

      {/* Comentario */}
      <p className="text-black-2">
        {feedback?.text}
      </p>
    </div>
  )
}
export default CommentCard
