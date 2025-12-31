import { useState, useEffect, useRef } from 'react';

// Hook pour déclencher les animations quand un élément devient visible
// J'utilise l'Intersection Observer API plutôt que de calculer les positions manuellement
export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Une fois visible, on garde l'état (pas de toggle)
        }
      },
      {
        threshold, // Pourcentage de visibilité avant de déclencher
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// Hook pour l'effet parallaxe - retourne simplement la position de scroll
// Facile à utiliser avec un transform CSS
export const useParallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return offset;
};
