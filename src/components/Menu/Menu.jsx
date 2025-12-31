import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Sparkles, Leaf, Flame, Fish, Wine, Coffee } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, isVisible] = useScrollAnimation(0.1);

  const categories = [
    { id: 'all', name: 'Tout', icon: Sparkles },
    { id: 'entrees', name: 'Entrées', icon: Leaf },
    { id: 'plats', name: 'Plats', icon: Flame },
    { id: 'poissons', name: 'Poissons', icon: Fish },
    { id: 'vins', name: 'Vins', icon: Wine },
    { id: 'desserts', name: 'Desserts', icon: Coffee },
  ];

  const menuItems = [
    {
      id: 1,
      category: 'entrees',
      name: 'Foie Gras de Canard Mi-Cuit',
      description: 'Chutney de figues, pain brioché toasté',
      price: '28€',
      featured: true,
      allergens: ['Gluten', 'Lait'],
    },
    {
      id: 2,
      category: 'entrees',
      name: 'Carpaccio de Saint-Jacques',
      description: 'Agrumes, huile de truffe, caviar osciètre',
      price: '32€',
      featured: true,
      allergens: ['Crustacés'],
    },
    {
      id: 3,
      category: 'entrees',
      name: 'Velouté de Châtaignes',
      description: 'Émulsion de cèpes, copeaux de parmesan',
      price: '18€',
      allergens: ['Lait'],
    },
    {
      id: 4,
      category: 'plats',
      name: 'Magret de Canard Rossini',
      description: 'Foie gras poêlé, jus aux truffes, gratin dauphinois',
      price: '42€',
      featured: true,
      allergens: ['Lait'],
    },
    {
      id: 5,
      category: 'plats',
      name: 'Bœuf Wagyu A5',
      description: 'Purée de pommes de terre truffée, légumes de saison',
      price: '68€',
      featured: true,
      allergens: ['Lait'],
    },
    {
      id: 6,
      category: 'plats',
      name: 'Risotto aux Cèpes',
      description: 'Parmesan 36 mois, huile de truffe blanche',
      price: '34€',
      allergens: ['Lait', 'Gluten'],
    },
    {
      id: 7,
      category: 'poissons',
      name: 'Bar de Ligne Sauvage',
      description: 'Beurre blanc au champagne, légumes croquants',
      price: '38€',
      featured: true,
      allergens: ['Poisson', 'Lait'],
    },
    {
      id: 8,
      category: 'poissons',
      name: 'Homard Bleu Breton',
      description: 'Bisque corsée, légumes glacés, riz sauvage',
      price: '56€',
      allergens: ['Crustacés', 'Lait'],
    },
    {
      id: 9,
      category: 'desserts',
      name: 'Soufflé au Grand Marnier',
      description: 'Glace vanille Bourbon, coulis d\'orange',
      price: '16€',
      allergens: ['Œufs', 'Lait', 'Gluten'],
    },
    {
      id: 10,
      category: 'desserts',
      name: 'Déclinaison de Chocolat Valrhona',
      description: 'Ganache, mousse, croustillant, sorbet cacao',
      price: '18€',
      featured: true,
      allergens: ['Lait', 'Œufs'],
    },
    {
      id: 11,
      category: 'desserts',
      name: 'Tarte Tatin Revisitée',
      description: 'Pommes caramélisées, crème glacée salée',
      price: '14€',
      allergens: ['Gluten', 'Lait', 'Œufs'],
    },
    {
      id: 12,
      category: 'vins',
      name: 'Château Margaux 2015',
      description: 'Grand Cru Classé, Bordeaux',
      price: '450€',
      featured: true,
    },
    {
      id: 13,
      category: 'vins',
      name: 'Puligny-Montrachet 1er Cru',
      description: 'Bourgogne Blanc, notes minérales',
      price: '180€',
    },
    {
      id: 14,
      category: 'vins',
      name: 'Champagne Dom Pérignon 2012',
      description: 'Brut, assemblage d\'exception',
      price: '320€',
      featured: true,
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-white via-primary-50/30 to-white dark:from-dark-950 dark:via-dark-900 dark:to-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Sparkles className="text-primary-500" size={16} />
            <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
              Notre Carte
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-dark-900 dark:text-white mb-6">
            Menu
            <span className="block text-gradient">Gastronomique</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400">
            Des produits d'exception travaillés avec passion par notre Chef étoilé
          </p>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/50 scale-105'
                    : 'glass-hover text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                <Icon size={18} className={`transition-transform group-hover:scale-110 ${activeCategory === category.id ? 'animate-pulse' : ''}`} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group glass-hover rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] ${
                item.featured ? 'border-2 border-primary-500/30 dark:border-primary-500/20' : ''
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-start gap-2">
                    <h3 className="text-xl font-display font-semibold text-dark-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.name}
                    </h3>
                    {item.featured && (
                      <Sparkles className="text-primary-500 fill-primary-500 flex-shrink-0 animate-pulse" size={16} />
                    )}
                  </div>
                  <p className="text-dark-600 dark:text-dark-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-gradient">
                    {item.price}
                  </span>
                </div>
              </div>

              {item.allergens && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.allergens.map((allergen) => (
                    <span
                      key={allergen}
                      className="text-xs px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 rounded-full"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Menu PDF Download */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 glass-hover rounded-full font-semibold text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Télécharger la carte complète (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
