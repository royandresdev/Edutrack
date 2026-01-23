import { BookOpen, GraduationCap, Users } from "lucide-react";
import { UserPreviewCardProps } from "../Types/index.ts";

export const userCardsData: UserPreviewCardProps[] = [
    {
        title: "Estudiantes",
        description: "Acceden fácilmente a su historial académico y reciben retroalimentación personalizada de sus docentes.",
        imageSrc: "/images/estudiante.png",
        linkTo: "/estudiante",
        icon: <BookOpen className="w-6 h-6" />
    },
    {
        title: "Docentes",
        description: "Evalúan el rendimiento de sus estudiantes y ofrecen retroalimentación detallada sobre su progreso.",
        imageSrc: "/images/docente.png",
        linkTo: "/docente",
        icon: <GraduationCap className="w-6 h-6" />
    },
    {
        title: "Tutores",
        description: "Supervisan y acompañan el avance académico de los estudiantes para asegurar su éxito.",
        imageSrc: "/images/tutor.png",
        linkTo: "/tutor",
        icon: <Users className="w-6 h-6" />
    }
];
