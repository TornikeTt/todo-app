import "./Tasks.scss";

function Tasks({ styling }) {
    return (
        <div
            className="task-containert"
            style={styling.input_field_backgroundColor}
        >
            <div className="tasks"></div>
            <footer>
                <p>5 items left</p>
                <div className="task-filters">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                <button>Clear Completed</button>
            </footer>
        </div>
    );
}

export default Tasks;
