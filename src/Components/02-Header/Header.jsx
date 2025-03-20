import "./Header.scss";
import sunIcon from "/images/icon-sun.svg";
import moonIcon from "/images/icon-moon.svg";

function Header({ toggleHandler, isDarkMode }) {
    return (
        <header>
            <h1>TODO</h1>
            <button onClick={toggleHandler} className="theme-toggle">
                <img src={isDarkMode ? sunIcon : moonIcon} alt="Toggle Theme" />
            </button>
        </header>
    );
}

export default Header;
