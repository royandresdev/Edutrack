import { FC } from "react";
import { Link } from "react-router-dom";
import { UserPreviewCardProps } from "../Types/index.ts";

const UserPreviewCard: FC<UserPreviewCardProps> = ({ title, description, imageSrc, linkTo, icon }) => {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Image card */}
      <img className="object-cover w-full h-auto" src={imageSrc} alt={`Imagen representativa de ${title}`} />
      {/* Content card */}
      <div className="p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-brand-primary mb-2 flex items-center gap-3">
          <span className="text-brand-primary p-2 bg-purple-100 rounded-lg">{icon}</span> {title}
        </h2>
        <p className="text-black-1 min-h-[4.5rem] leading-relaxed">
          {description}
        </p>
        <Link className="flex items-center justify-center w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg" to={linkTo}>
          Ver demo
        </Link>
      </div>
    </article>
  );
}

export default UserPreviewCard;
