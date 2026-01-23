import { userCardsData } from "./Data/index.tsx";
import { Link } from "react-router-dom";
import UserPreviewCard from "./Components/UserPreviewCard.tsx";

function Home() {
    return (
        <main id="home" className="max-w-7xl px-6 md:px-12 mx-auto">
            <section className="space-y-9 py-20 max-w-[656px] mx-auto">
                <h1 className="text-center tracking-tight text-5xl md:text-6xl text-black">Bienvenido a <strong>EduTrack</strong></h1>
                <p className="text-center text-black-1 text-lg md:text-xl">
                    Un espacio diseñado para facilitar el seguimiento y la evaluación del
                    rendimiento académico y conectar entre sí a los docentes, estudiantes
                    y sus tutores.
                </p>
                <Link
                    className="flex w-max mx-auto bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    to="/login"
                    aria-label="Ir a iniciar sesión"
                >
                    Iniciar Sesión
                </Link>
            </section>

            {/* Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
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
            </section>
        </main>
    );
}





export default Home;
