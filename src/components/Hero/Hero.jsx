import { ChevronDown, Star, Award, Users } from 'lucide-react';
import { useParallax } from '../../hooks/useScrollAnimation';

const Hero = () => {
  const offset = useParallax();

  const stats = [
    { icon: Star, value: '4.9', label: 'Note Google' },
    { icon: Award, value: '15+', label: 'Ans d\'Excellence' },
    { icon: Users, value: '50K+', label: 'Clients Satisfaits' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800">
        {/* Animated Circles */}
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-float"
          style={{ transform: `translateY(${offset * 0.1}px)` }}
        />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '3s', transform: `translateY(${offset * 0.15}px)` }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                             linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full animate-scale-in">
            <Star className="text-primary-500 fill-primary-500" size={16} />
            <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
              Restaurant Étoilé · Cuisine Authentique
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-bold leading-none">
              <span className="block text-dark-900 dark:text-white">
                L'Art de la
              </span>
              <span className="block bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 dark:from-primary-400 dark:via-primary-300 dark:to-primary-400 bg-clip-text text-transparent animate-gradient">
                Gastronomie
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-dark-600 dark:text-dark-400 max-w-2xl mx-auto leading-relaxed">
              Une expérience culinaire exceptionnelle où tradition et créativité se rencontrent
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#menu"
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-105 flex items-center gap-2"
            >
              Découvrir le Menu
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
            </a>
            <a
              href="#reservation"
              className="px-8 py-4 glass-hover rounded-full font-semibold text-lg text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105"
            >
              Réserver une Table
            </a>
          </div>

          {/* Stats */}
          <div className="pt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass-hover rounded-2xl p-6 transition-all duration-300 hover:scale-105">
                  <stat.icon className="mx-auto mb-3 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" size={32} />
                  <div className="text-3xl font-bold text-dark-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dark-300 dark:border-dark-700 rounded-full p-1">
          <div className="w-1 h-3 bg-primary-600 dark:bg-primary-400 rounded-full mx-auto animate-pulse" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border-4 border-primary-300/30 dark:border-primary-700/30 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border-4 border-primary-400/30 dark:border-primary-600/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
