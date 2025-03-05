import { useState, useEffect } from "react";
import Form from "../Form/Form";

import "./App.scss";

import darkModeBackgroundImage from "/images/bg-desktop-dark.jpg";
import lightModeBackgroundImage from "/images/bg-desktop-light.jpg";

import darkModeBackgroundImage_forMobile from "/images/bg-mobile-dark.jpg";
import lightModeBackgroundImage_forMobile from "/images/bg-mobile-light.jpg";

function App() {
    // State
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const styling = {
        backgroundColor: {
            backgroundColor: isDarkMode
                ? "hsl(235, 21%, 11%)"
                : "hsl(0, 0%, 98%)",
        },

        getBackgroundImage: {
            backgroundImage: `url(${
                windowWidth > 375
                    ? isDarkMode
                        ? darkModeBackgroundImage
                        : lightModeBackgroundImage
                    : isDarkMode
                    ? darkModeBackgroundImage_forMobile
                    : lightModeBackgroundImage_forMobile
            })`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundSize: "cover",
            width: "100%",
            height: "290px",
        },
    };

    const toggleHendler = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <div style={styling.backgroundColor} className="containert">
            <div style={styling.getBackgroundImage} className="topImage"></div>
            <main>
                <header>
                    <h1>TODO</h1>
                    <button onClick={toggleHendler} className="theme-toggle">
                        <img
                            src={
                                isDarkMode
                                    ? "./images/icon-sun.svg"
                                    : "./images/icon-moon.svg"
                            }
                            alt="Toggle Theme"
                        />
                    </button>
                </header>
                <Form />
            </main>
        </div>
    );
}

export default App;
