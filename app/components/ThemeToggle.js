import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/ThemeToggle.css';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? <FaMoon className="icon moon-icon" /> : <FaSun className="icon sun-icon" />}
      <div className={`toggle-slider ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="toggle-circle"></div>
      </div>
    </div>
  );
};

export default ThemeToggle;