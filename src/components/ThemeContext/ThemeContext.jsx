
import { createContext, useState, useEffect } from 'react';


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
