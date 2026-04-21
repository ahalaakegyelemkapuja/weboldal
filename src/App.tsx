import { useEffect, useRef, useState } from 'react';
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

const LOADER_HOLD_MS = 500;
const LOADER_EXIT_MS = 620;

type LoaderPhase = 'visible' | 'revealing' | 'hidden';

function isPageRoute(path: string) {
  return path === '/' || path === '/eskuvo';
}

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
  const [loaderPhase, setLoaderPhase] = useState<LoaderPhase>('visible');
  const previousPathRef = useRef(normalizedPath);
  const loaderTimersRef = useRef<number[]>([]);

  const clearLoaderTimers = () => {
    loaderTimersRef.current.forEach(timerId => {
      window.clearTimeout(timerId);
    });
    loaderTimersRef.current = [];
  };

  const startLoaderCycle = () => {
    clearLoaderTimers();
    setLoaderPhase('visible');

    const revealTimer = window.setTimeout(() => {
      setLoaderPhase('revealing');
    }, LOADER_HOLD_MS);

    const hideTimer = window.setTimeout(() => {
      setLoaderPhase('hidden');
    }, LOADER_HOLD_MS + LOADER_EXIT_MS);

    loaderTimersRef.current = [revealTimer, hideTimer];
  };

  useEffect(() => {
    const handleRouteChange = () => {
      const nextPath = getNormalizedPath();
      const previousPath = previousPathRef.current;

      if (nextPath !== previousPath && isPageRoute(previousPath) && isPageRoute(nextPath)) {
        startLoaderCycle();
      }

      previousPathRef.current = nextPath;
      setNormalizedPath(nextPath);
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    startLoaderCycle();

    return () => {
      clearLoaderTimers();
    };
  }, []);

  const isWeddingPage = normalizedPath === '/eskuvo';

  const currentPage = isWeddingPage ? <WeddingPage /> : <MainSite />;

  const appShellClassName = loaderPhase === 'hidden'
    ? 'app-shell app-shell-visible'
    : loaderPhase === 'revealing'
      ? 'app-shell app-shell-revealing'
      : 'app-shell app-shell-loading';

  return (
    <>
      {loaderPhase !== 'hidden' ? (
        <div className={`site-loader ${loaderPhase === 'revealing' ? 'site-loader-exit' : ''}`} aria-hidden="true">
          <img className="site-loader-logo" src="/logos/aniko-logo.svg" alt="" />
        </div>
      ) : null}
      <div className={appShellClassName}>
        {currentPage}
      </div>
    </>
  );
}
