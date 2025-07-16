import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './ThemeToggle.css'; 


const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="themeToggle__button" onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;