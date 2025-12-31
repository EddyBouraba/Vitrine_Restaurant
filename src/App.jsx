import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Reservation from './components/Reservation/Reservation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navigation />
        <Hero />
        <Menu />
        <Gallery />
        <About />
        <Reservation />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
