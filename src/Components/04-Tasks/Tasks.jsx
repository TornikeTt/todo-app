import "./Tasks.scss";

import cross from "/images/icon-cross.svg";

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
                    <button className="all">All</button>
                    <button className="Active">Active</button>
                    <button className="Completed">Completed</button>
                </div>
                <button>Clear Completed</button>
            </footer>
        </div>
    );
}

export default Tasks;
