import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, isVisible] = useScrollAnimation(0.1);

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
      title: 'Ambiance Élégante',
      category: 'Restaurant',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
      title: 'Cuisine Raffinée',
      category: 'Plats',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
      title: 'Desserts Maison',
      category: 'Desserts',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
      title: 'Salle Principale',
      category: 'Restaurant',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800',
      title: 'Art Culinaire',
      category: 'Plats',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
      title: 'Bar à Vins',
      category: 'Restaurant',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800',
      title: 'Créations du Chef',
      category: 'Plats',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800',
      title: 'Pâtisserie Fine',
      category: 'Desserts',
    },
  ];

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage?.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage?.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Camera className="text-primary-500" size={16} />
            <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
              Notre Univers
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-dark-900 dark:text-white mb-6">
            Galerie
            <span className="block text-gradient">Photos</span>
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400">
            Plongez dans l'atmosphère unique de notre restaurant
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative break-inside-avoid cursor-pointer transition-all duration-700 ${
                index % 3 === 0 ? 'delay-0' : index % 3 === 1 ? 'delay-100' : 'delay-200'
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto transform transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-display text-xl font-semibold">
                      {image.title}
                    </h3>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                  <Camera className="text-primary-600" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="text-white" size={24} />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          <button
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Image */}
          <div className="relative max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full mb-2">
                {selectedImage.category}
              </span>
              <h3 className="text-white font-display text-2xl font-semibold">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
