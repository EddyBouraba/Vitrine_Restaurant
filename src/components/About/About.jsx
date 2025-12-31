import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ChefHat, Award, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const timeline = [
    {
      year: '2009',
      title: 'L\'Ouverture',
      description: 'Naissance du Délice dans le cœur de Paris',
    },
    {
      year: '2012',
      title: 'Première Étoile',
      description: 'Reconnaissance du Guide Michelin',
    },
    {
      year: '2016',
      title: 'Expansion',
      description: 'Agrandissement avec terrasse panoramique',
    },
    {
      year: '2020',
      title: 'Excellence',
      description: 'Prix du Meilleur Restaurant Gastronomique',
    },
  ];

  const values = [
    {
      icon: ChefHat,
      title: 'Savoir-Faire',
      description: 'Une équipe de chefs passionnés formés aux meilleures techniques culinaires françaises',
    },
    {
      icon: Heart,
      title: 'Produits Locaux',
      description: 'Des ingrédients sélectionnés auprès de producteurs locaux et responsables',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Une cuisine créative qui réinvente les classiques de la gastronomie',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Un service irréprochable pour une expérience culinaire inoubliable',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <ChefHat className="text-primary-500" size={16} />
            <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
              Notre Histoire
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-dark-900 dark:text-white mb-6">
            À Propos
            <span className="block text-gradient">Du Délice</span>
          </h2>
        </div>

        {/* Story Section */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-24 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl" />
            <div className="relative glass rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800"
                alt="Chef"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark-900/95 to-transparent">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Chef Pierre Dubois
                </h3>
                <p className="text-dark-200">
                  Chef Étoilé Michelin · 20+ ans d'expérience
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-dark-700 dark:text-dark-300 leading-relaxed">
              Depuis 2009, <strong className="text-gradient">Le Délice</strong> incarne l'excellence de la gastronomie française dans un cadre raffiné et chaleureux. Notre Chef, Pierre Dubois, formé dans les plus grandes maisons parisiennes, propose une cuisine créative qui célèbre les saveurs authentiques de notre terroir.
            </p>
            <p className="text-lg text-dark-700 dark:text-dark-300 leading-relaxed">
              Chaque plat est une œuvre d'art, conçue avec passion et précision, utilisant exclusivement des produits de saison sélectionnés auprès de nos partenaires producteurs locaux. Notre engagement envers la qualité et l'authenticité nous a valu la reconnaissance du Guide Michelin.
            </p>
            <p className="text-lg text-dark-700 dark:text-dark-300 leading-relaxed">
              Au Délice, nous croyons que la gastronomie est un art de vivre, un moment de partage et d'émotion. Nous vous invitons à découvrir notre univers où tradition et modernité se rencontrent pour créer des souvenirs inoubliables.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className={`mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-display font-bold text-dark-900 dark:text-white text-center mb-12">
            Notre Parcours
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-primary-500 to-primary-600 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Left/Right Content */}
                  <div className={index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}>
                    <div className="glass-hover rounded-2xl p-6 transition-all duration-300 hover:scale-105">
                      <div className="text-4xl font-display font-bold text-gradient mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-xl font-display font-bold text-dark-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-dark-600 dark:text-dark-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-primary-600 to-primary-500 rounded-full border-4 border-white dark:border-dark-950 shadow-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-display font-bold text-dark-900 dark:text-white text-center mb-12">
            Nos Valeurs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group glass-hover rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-display font-bold text-dark-900 dark:text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
