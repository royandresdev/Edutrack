import { FC } from "react";
import { Link } from "react-router-dom";

const userCardsData: UserPreviewCardProps[] = [
    {
        title: "Estudiantes",
        description: "Acceden fácilmente a su historial académico y reciben retroalimentación personalizada de sus docentes.",
        imageSrc: "/images/estudiante.png",
        linkTo: "/estudiante"
    },
    {
        title: "Docentes",
        description: "Evalúan el rendimiento de sus estudiantes y ofrecen retroalimentación detallada sobre su progreso.",
        imageSrc: "/images/docente.png",
        linkTo: "/docente"
    },
    {
        title: "Tutores",
        description: "Supervisan y acompañan el avance académico de los estudiantes para asegurar su éxito.",
        imageSrc: "/images/tutor.png",
        linkTo: "/tutor"
    }
];

function Home() {
    return (
        <div id="home" className="max-w-[1216px] mx-auto">
            {/* Encabezado */}
            <div className="space-y-9 py-20 max-w-[656px] mx-auto">
                <h1 className="text-center font-black">Bienvenido a EduTrack</h1>
                <p className="text-center px-10 mb-8 text-black-1">
                    {" "}
                    Un espacio diseñado para facilitar el seguimiento y la evaluación del
                    rendimiento académico y conectar entre sí a los docentes, estudiantes
                    y sus tutores.
                </p>
                <Link
                    className="w-max mx-auto block text-xl font-bold btn-primary px-10 py-4"
                    to="/login"
                >
                    Iniciar Sesión
                </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-8 pt-20 mb-[208px]">
                {userCardsData.map((card, index) => (
                    <UserPreviewCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageSrc={card.imageSrc}
                        linkTo={card.linkTo}
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
}

const UserPreviewCard: FC<UserPreviewCardProps> = ({ title, description, imageSrc, linkTo }) => {
    return (
        <div className="card border-brand-primary border">
            {/* Image card */}
            <div className="w-full h-[232px] bg-[#6B6969]">
                <img src={imageSrc} alt={title} />
            </div>
            {/* Content card */}
            <div className="p-8">
                <h2 className="text-3xl font-bold text-brand-primary mb-2">{title}</h2>
                <p className="text-black-1 mb-4">
                    {description}
                </p>
                {linkTo && (
                    <Link className="font-semibold btn-primary w-full text-center py-2 flex items-center justify-center" to={linkTo}>
                        Ver demo
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Home;
