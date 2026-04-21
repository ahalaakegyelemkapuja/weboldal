import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import WeddingPage from './components/WeddingPage';
import { getNormalizedPath } from './navigation';

function MainSite() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-cream)' }}>
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Testimonials />
      <Pricing />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  const [normalizedPath, setNormalizedPath] = useState(() => getNormalizedPath());

  useEffect(() => {
    const handleRouteChange = () => setNormalizedPath(getNormalizedPath());

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const isWeddingPage = normalizedPath === '/eskuvo';

  if (isWeddingPage) {
    return <WeddingPage />;
  }

  return <MainSite />;
}
