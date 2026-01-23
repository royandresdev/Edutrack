import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Estudiante, Docente, Home } from "../pages/index.ts";
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Login from '../pages/login.jsx'
import { Toaster } from "sonner";

function MyRoutes() {
    return (
        <BrowserRouter>
            <Toaster richColors />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/estudiante" element={<Estudiante />} />
                <Route path="/docente" element={<Docente />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}


export default MyRoutes;
