import { Facebook, Instagram, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="max-w-7xl mx-auto bg-gradient-to-b from-transparent to-gray-50 py-12 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo y contacto */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/Logo.svg" alt="EduTrack Logo" />
              </div>
              <h1 className="text-2xl">
                <span className="text-brand-primary font-bold">Edu</span>
                <span className="text-gray-400">Track</span>
              </h1>
            </div>
            <div className="space-y-2 text-gray-600">
              <p className="font-medium text-gray-800">¿Necesitas ayuda? Contáctenos</p>
              <a href="mailto:edutrack@gmail.com" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>edutrack@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Políticas */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 text-lg">Políticas de uso</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-primary transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-primary transition-colors">
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 text-lg">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-purple-100 hover:bg-brand-primary text-brand-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-100 hover:bg-brand-primary text-brand-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© 2025 EduTrack. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
