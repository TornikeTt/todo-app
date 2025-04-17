import "./Tasks.scss";
import { useState, useEffect , useCallback } from "react";
import EachTasks from "./EachTasks";

function Tasks({ styling, isDarkMode, setTodo, todo }) {
    const [status, setStatus] = useState("All");
    const [filteredTodos, setFilteredTodos] = useState([])

    const handleClearCompleted = () => {
        setTodo((prev) => (
            prev.filter((each) => each.completed === false)
        ))
    };

    const statusHandler = (e) => {
        setStatus(e.target.innerText)
    }

    useEffect(() => {filterHandler()}, [todo, status])

    const filterHandler = () => { 
        switch(status) { 
            case "Active":
                setFilteredTodos(todo.filter(t => !t.completed));
                break;
            case "Completed":
                setFilteredTodos(todo.filter(t => t.completed));
                break;
            default:
                setFilteredTodos(todo);
                break;
        }
    }


    const handle_ClassName_OfButton = useCallback(
        (buttonType) => {
            return [
                "filter-button", // Always include the base button class
                status === buttonType && "selected", // If the button type matches the active filter, add the "selected" class
                isDarkMode ? "dark-hover" : "light-hover", // Apply "dark-hover" if dark mode is enabled, otherwise use "light-hover"
            ]
                .filter(Boolean) // Removes falsy values (false, null, undefined) from the array
                .join(" "); // Joins the array elements into a single space-separated string
        },
        [status, isDarkMode] 
    );

    return (
        <div className="task-containert" style={styling.input_field_backgroundColor}>
            <EachTasks 
                styling={styling}
                setTodo={setTodo}
                todo={todo}
                filteredTodos={filteredTodos}
                isDarkMode={isDarkMode}
            />

            <footer>
                <p>{`${todo.length} items left`}</p>
                <div onClick={statusHandler} className="task-filters">
                    <button className={handle_ClassName_OfButton("All")}>All</button>
                    <button className={handle_ClassName_OfButton("Active")}>Active</button>
                    <button className={handle_ClassName_OfButton("Completed")}>Completed</button>
                </div>

                <button 
                    className={handle_ClassName_OfButton("Clear")}
                    onClick={handleClearCompleted}>
                    Clear Completed
                </button>
            </footer>

        </div>
    );
}

export default Tasks;
