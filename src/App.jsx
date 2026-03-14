import React, { useState, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';

export const ThemeContext = createContext({ isDark: false, toggleTheme: () => { } });

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.body.setAttribute('data-theme', newDark ? 'dark' : 'light');
  };

  // Set initial theme on mount
  React.useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <BentoGrid />
        </main>
        {/* <footer
          className="py-12 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto"
          style={{ borderTop: '1px solid var(--card-border)' }}
        >
          <p className="font-display font-black uppercase text-lg tracking-tighter">
            AJAY AMALA
          </p>
          <p className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} · BUILT WITH PASSION
          </p>
        </footer> */}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
