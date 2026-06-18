import { useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { BackToTop } from './components/BackToTop';
import { ThemeProvider } from './context/ThemeContext';
import { NewPortfolio } from './components/NewPortfolio';
import { LegalModal } from './components/LegalModal';
import { Gallery } from './components/Gallery';

function App() {
  const [viewVersion, setViewVersion] = useState<'classic' | 'v2'>('classic');
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-dark-900 text-gray-900 dark:text-white min-h-screen">
        {viewVersion === 'v2' ? (
          <NewPortfolio
            onViewClassic={() => setViewVersion('classic')}
            onOpenPrivacy={() => setActiveModal('privacy')}
            onOpenTerms={() => setActiveModal('terms')}
          />
        ) : (
          <>
            <Navigation onViewV2={() => setViewVersion('v2')} />
            <Hero onViewV2={() => setViewVersion('v2')} />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Gallery />
            <Contact />
            <Footer
              onOpenPrivacy={() => setActiveModal('privacy')}
              onOpenTerms={() => setActiveModal('terms')}
            />
            <BackToTop />
            
            {/* Quick floating action to V2 */}
            <div className="fixed bottom-6 left-6 z-50">
              <button
                onClick={() => setViewVersion('v2')}
                className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95 transition-all duration-300 font-display text-sm border border-indigo-500"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Enter V2 Lab 🔬
              </button>
            </div>
          </>
        )}

        <LegalModal
          isOpen={activeModal !== null}
          onClose={() => setActiveModal(null)}
          initialTab={activeModal || 'privacy'}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;

