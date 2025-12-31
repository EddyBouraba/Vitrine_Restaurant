import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Hook personnalisé pour utiliser le thème dans les composants
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Initialise le thème en vérifiant localStorage puis les préférences système
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) {
        return stored === 'dark';
      }
      // Utilise les préférences système si rien n'est stocké
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Applique le thème au DOM et le sauvegarde
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
