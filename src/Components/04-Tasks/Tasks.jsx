import "./Tasks.scss";
import { useState, useCallback } from "react";
import cross from "/images/icon-cross.svg";

function Tasks({ styling, isDarkMode }) {
    const [activeFilter, setActiveFilter] = useState("All");
    const [showToast, setShowToast] = useState(false);

    const handleClearCompleted = () => {
        setActiveFilter("All");
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 1000);
    };

    const handle_ClassName_OfButton = useCallback(
        (buttonType) => {
            return [
                "filter-button", // Always include the base button class
                activeFilter === buttonType && "selected", // If the button type matches the active filter, add the "selected" class
                isDarkMode ? "dark-hover" : "light-hover", // Apply "dark-hover" if dark mode is enabled, otherwise use "light-hover"
            ]
                .filter(Boolean) // Removes falsy values (false, null, undefined) from the array
                .join(" "); // Joins the array elements into a single space-separated string
        },
        [activeFilter, isDarkMode] // Dependencies: function is only re-created when `activeFilter` or `isDarkMode` changes
    );

    return (
        <div
            className="task-containert"
            style={styling.input_field_backgroundColor}
        >
            <div className="tasks"></div>
            <footer>
                <p>5 items left</p>
                <div className="task-filters">
                    <button
                        className={handle_ClassName_OfButton("All")}
                        onClick={() => setActiveFilter("All")}
                        aria-pressed={activeFilter === "All"}
                    >
                        All
                    </button>
                    <button
                        className={handle_ClassName_OfButton("Active")}
                        onClick={() => setActiveFilter("Active")}
                        aria-pressed={activeFilter === "Active"}
                    >
                        Active
                    </button>
                    <button
                        className={handle_ClassName_OfButton("Completed")}
                        onClick={() => setActiveFilter("Completed")}
                        aria-pressed={activeFilter === "Completed"}
                    >
                        Completed
                    </button>
                </div>

                <button
                    onClick={handleClearCompleted}
                    className={handle_ClassName_OfButton("Clear")}
                >
                    Clear Completed
                </button>
            </footer>

            {showToast && (
                <div className="toast">🧹 Completed tasks cleared</div>
            )}
        </div>
    );
}

export default Tasks;
