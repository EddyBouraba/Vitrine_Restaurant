import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'À Propos', href: '#about' },
    { name: 'Réserver', href: '#reservation' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-gradient-to-r from-primary-600 to-primary-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-primary-100 transition-colors">
              <Phone size={14} />
              <span>+33 1 23 45 67 89</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>123 Rue de la Gastronomie, 75001 Paris</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs">Mar - Dim : 12h - 14h30 & 19h - 22h30</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-2xl shadow-dark-900/10 dark:shadow-black/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">L</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
                  Le Délice
                </h1>
                <p className="text-xs text-dark-600 dark:text-dark-400 -mt-1">Gastronomie Française</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-800 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg glass-hover transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun size={20} className="text-primary-400" />
                ) : (
                  <Moon size={20} className="text-primary-600" />
                )}
              </button>

              {/* CTA Button */}
              <a
                href="#reservation"
                className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105"
              >
                Réserver
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg glass-hover"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass border-t border-dark-200/20 dark:border-dark-700/20">
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-800 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#reservation"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-medium text-center mt-4"
              >
                Réserver une table
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
