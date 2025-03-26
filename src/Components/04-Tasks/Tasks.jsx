import "./Tasks.scss";
import { useState } from "react";
import cross from "/images/icon-cross.svg";

function Tasks({ styling }) {
    const [activeFilter, setActiveFilter] = useState("All");
    const [showToast, setShowToast] = useState(false);

    const handleClearCompleted = () => {
        setActiveFilter("All");
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 1000);
    };

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
                        className={`filter-button ${
                            activeFilter === "All" ? "selected" : ""
                        }`}
                        onClick={() => setActiveFilter("All")}
                    >
                        All
                    </button>
                    <button
                        className={`filter-button ${
                            activeFilter === "Active" ? "selected" : ""
                        }`}
                        onClick={() => setActiveFilter("Active")}
                    >
                        Active
                    </button>
                    <button
                        className={`filter-button ${
                            activeFilter === "Completed" ? "selected" : ""
                        }`}
                        onClick={() => setActiveFilter("Completed")}
                    >
                        Completed
                    </button>
                </div>

                <button onClick={handleClearCompleted}>Clear Completed</button>
            </footer>

            {showToast && (
                <div className="toast">🧹 Completed tasks cleared</div>
            )}
        </div>
    );
}

export default Tasks;
