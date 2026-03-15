import React, { useState, createContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';

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
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
