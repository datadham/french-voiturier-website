import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center justify-center md:mx-0 mx-auto">
            <img
              src="src/static/img/nav-logo.png"
              alt="Logo"
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-900 hover:text-blue-400">
              Services
            </a>
            <a href="#about" className="text-gray-900 hover:text-blue-400">
              À propos
            </a>
            <a href="#contact" className="text-gray-900 hover:text-blue-400">
              Contact
            </a>
            <a
              href="https://parkboost-app.netlify.app"
              target="_blank"
              className="text-white hover:bg-gray-700 bg-gray-900 rounded-full px-6 py-2"
              rel="noopener noreferrer"
            >
              Connexion
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-900 hover:text-blue-400 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-2">
              <a
                href="#services"
                className="block text-gray-900 hover:text-blue-400 px-4 py-2"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-gray-900 hover:text-blue-400 px-4 py-2"
              >
                À propos
              </a>
              <a
                href="#contact"
                className="block text-gray-900 hover:text-blue-400 px-4 py-2"
              >
                Contact
              </a>
              <a
                href="https://parkboost-app.netlify.app"
                target="_blank"
                className="block text-white bg-gray-900 hover:bg-blue-500 rounded-full px-4 py-2 text-center"
                rel="noopener noreferrer"
              >
                Me connecter
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
