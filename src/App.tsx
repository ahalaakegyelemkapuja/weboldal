import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-cream)' }}>
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
