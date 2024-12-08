'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import TerminalComponent from '@/components/Terminal';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';

// https://images.unsplash.com/photo-1559762691-617a33825bc6?q=80&w=1740&auto=format&fit=crop
// https://images.unsplash.com/photo-1566410824233-a8011929225c?q=80&w=1740&auto=format&fit=crop

function App() {
  const [activeSection, setActiveSection] = React.useState('terminal');

  const sections = {
    terminal: <TerminalComponent />,
    about: <About />,
    projects: <Projects />,
    contact: <Contact />,
    skills: <Skills />,
  };

  const backgrounds = {
    terminal:
      "bg-[url('https://images.unsplash.com/photo-1557264322-b44d383a2906?q=80&w=1740&auto=format&fit=crop')] bg-cover",
    about:
      "bg-[url('https://images.unsplash.com/photo-1510906594845-bc082582c8cc?auto=format&fit=crop&q=80&w=2072')] bg-cover",
    projects:
      "bg-[url('https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&q=80&w=2072')] bg-cover",
    contact:
      "bg-[url('https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=2072')] bg-cover",
  };

  return (
    <div className='min-h-screen text-zinc-100 relative'>
      <div
        className={`fixed inset-0 transition-all duration-700 ${
          backgrounds[activeSection as keyof typeof backgrounds]
        }`}
      />
      <div className='fixed inset-0 bg-zinc-900/85 backdrop-blur-sm' />

      <div className='relative z-10'>
        <Navigation activeSection={activeSection} onNavigate={setActiveSection} />

        <main className='container mx-auto px-4 pt-5 pb-28 max-w-5xl'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {sections[activeSection as keyof typeof sections]}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
