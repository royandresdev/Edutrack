import { BookOpen, GraduationCap, Users } from "lucide-react";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

const userCardsData: UserPreviewCardProps[] = [
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

function Home() {
    return (
        <div id="home" className="max-w-7xl px-6 md:px-12 mx-auto">
            {/* Encabezado */}
            <div className="space-y-9 py-20 max-w-[656px] mx-auto">
                <h1 className="text-center tracking-tight text-5xl md:text-6xl text-black">Bienvenido a <strong>EduTrack</strong></h1>
                <p className="text-center text-black-1 text-lg md:text-xl">
                    {" "}
                    Un espacio diseñado para facilitar el seguimiento y la evaluación del
                    rendimiento académico y conectar entre sí a los docentes, estudiantes
                    y sus tutores.
                </p>
                <Link
                    className="flex w-max mx-auto bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    to="/login"
                >
                    Iniciar Sesión
                </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20 mb-[208px]">
                {userCardsData.map((card) => (
                    <UserPreviewCard
                        key={card.linkTo}
                        title={card.title}
                        description={card.description}
                        imageSrc={card.imageSrc}
                        linkTo={card.linkTo}
                        icon={card.icon}
                    />
                ))}
            </div>
        </div>
    );
}

interface UserPreviewCardProps {
    title: string;
    description: string;
    imageSrc: string;
    linkTo: string;
    icon: ReactNode
}

const UserPreviewCard: FC<UserPreviewCardProps> = ({ title, description, imageSrc, linkTo, icon }) => {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Image card */}
            <div className="w-full h-[232px] bg-[#6B6969]">
                <img className="object-cover w-full h-full" src={imageSrc} alt={`Imagen representativa de ${title}`} />
            </div>
            {/* Content card */}
            <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="text-brand-primary p-2 bg-purple-100 rounded-lg">
                        {icon}
                    </div>
                    <h2 className="text-2xl font-semibold text-brand-primary mb-2">{title}</h2>
                </div>
                <p className="text-black-1 min-h-[4.5rem] leading-relaxed">
                    {description}
                </p>
                <Link className="flex items-center justify-center w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg" to={linkTo}>
                    Ver demo
                </Link>
            </div>
        </div>
    );
}

export default Home;
