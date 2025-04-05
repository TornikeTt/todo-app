import { useState, useEffect } from "react";

import Form from "../03-Form/Form";
import Header from "../02-Header/Header";
import Tasks from "../04-Tasks/Tasks";

import "./App.scss";

import darkModeBg from "/images/bg-desktop-dark.jpg";
import lightModeBg from "/images/bg-desktop-light.jpg";
import darkModeBgMobile from "/images/bg-mobile-dark.jpg";
import lightModeBgMobile from "/images/bg-mobile-light.jpg";

function App() {
    // State
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [todo, setTodo] = useState([
        {
            id: 1,
            text: "Complete online Javascript course",
            completed: false,
            filterAreay: "All",
        },
        {
            id: 2,
            text: "Jog around the park 3x a week",
            completed: false,
            filterAreay: "All",
        },
        {
            id: 3,
            text: "10 minutes meditation",
            completed: false,
            filterAreay: "All",
        },
        {
            id: 4,
            text: "Read for 1 hour",
            completed: false,
            filterAreay: "All",
        },
        {
            id: 5,
            text: "Pick up groceries",
            completed: false,
            filterAreay: "All",
        },
        {
            id: 6,
            text: "Complete Todo App on Frontend Mentor",
            completed: false,
            filterAreay: "All",
        },
    ]);

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
                        ? darkModeBg
                        : lightModeBg
                    : isDarkMode
                    ? darkModeBgMobile
                    : lightModeBgMobile
            })`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundSize: "cover",
            width: "100%",
            height: "290px",
        },

        input_field_backgroundColor: {
            backgroundColor: isDarkMode
                ? "hsl(235, 24%, 19%)"
                : "hsl(0, 0%, 98%)",
            color: isDarkMode ? "hsl(234, 39%, 85%)" : "hsl(235, 19%, 35%)",
        },

        circleColor: {
            borderWidth: "1px",
            borderColor: isDarkMode
                ? "hsl(237, 14%, 26%)"
                : "hsl(236, 33%, 92%)",
            borderStyle: "solid",
        },
    };

    const toggleHandler = () => setIsDarkMode((prev) => !prev);

    return (
        <div style={styling.backgroundColor} className="containert">
            <div style={styling.getBackgroundImage} className="topImage"></div>
            <main>
                <Header isDarkMode={isDarkMode} toggleHandler={toggleHandler} />
                <Form styling={styling} />
                <Tasks
                    styling={styling}
                    isDarkMode={isDarkMode}
                    todo={todo}
                    setTodo={setTodo}
                />
            </main>
        </div>
    );
}

export default App;
