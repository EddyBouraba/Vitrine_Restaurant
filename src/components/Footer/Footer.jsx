import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'À Propos', href: '#about' },
    { name: 'Réserver', href: '#reservation' },
  ];

  const legalLinks = [
    { name: 'Mentions Légales', href: '#' },
    { name: 'Politique de Confidentialité', href: '#' },
    { name: 'CGV', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-900 to-dark-950 dark:from-dark-950 dark:to-black text-dark-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">L</span>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">Le Délice</h3>
                <p className="text-sm text-dark-400">Gastronomie Française</p>
              </div>
            </div>
            <p className="text-dark-400 leading-relaxed mb-6">
              Une expérience culinaire d'exception au cœur de Paris depuis 2009.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-dark-800 hover:bg-gradient-to-br hover:from-primary-600 hover:to-primary-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={18} className="text-dark-400 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-500 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-dark-400">123 Rue de la Gastronomie</p>
                  <p className="text-dark-400">75001 Paris, France</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 flex-shrink-0" size={18} />
                <a href="tel:+33123456789" className="text-dark-400 hover:text-primary-400 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary-500 flex-shrink-0" size={18} />
                <a href="mailto:contact@ledelice.fr" className="text-dark-400 hover:text-primary-400 transition-colors">
                  contact@ledelice.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-6">Horaires</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="text-primary-500 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white font-medium mb-2">Déjeuner</p>
                  <p className="text-dark-400">Mar - Dim : 12h - 14h30</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-primary-500 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-white font-medium mb-2">Dîner</p>
                  <p className="text-dark-400">Mar - Dim : 19h - 22h30</p>
                </div>
              </div>
              <p className="text-dark-500 text-sm italic mt-4">Fermé le lundi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-500 text-sm text-center md:text-left">
              © {currentYear} Le Délice. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-dark-500 hover:text-primary-400 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
