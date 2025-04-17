import {useState} from "react";
import "./EachTasks.scss";

import cross from "/images/icon-cross.svg";
import check from "/images/icon-check.svg";


function EachTasks({styling, todo, setTodo, filteredTodos}) {
    const [delete_button_hover, set_Delete_button_hover] = useState(null)
    const [statusIndicatro_mouse, setStatusIndicator_mouse] = useState(null)

    const hoverHandler = (id) => { 
        set_Delete_button_hover(id)
    }

    const deleteHandler = (id) => { 
        setTodo( (prevData) =>  
            prevData.filter((item) => item.id !== id)
        )
    }

    const completeHandler = (id) => { 
        setTodo((prevData) => 
          prevData.map((item) => 
            item.id === id 
              ? { ...item, completed: !item.completed } 
              : item  
            )
        )
    }

    const satustIndicator_handler = (e, id) => { 
        switch (e.type) {
            case "mouseenter":
                setStatusIndicator_mouse(id);
                break;
            case "mouseleave":
                setStatusIndicator_mouse(null);
                break;
            default:
                break;
        }
    }


    return (
        <div className="tasks-list">
            {filteredTodos.map((each, index) => (
                <div className="todo-task" key={each.id || index}>
                    <div 
                        className="todo-task__container"
                        onMouseEnter={() => hoverHandler(each.id)}
                        onMouseLeave={() => set_Delete_button_hover(null)} 
                        onClick={() => completeHandler(each.id)}
                    >
                        <div className="todo-task__info">
                            <div 
                                className="todo-task__status-indicator" 

                                onMouseEnter={(e) => satustIndicator_handler(e, each.id)}
                                onMouseLeave={(e) => satustIndicator_handler(e, each.id)}
                                style={statusIndicatro_mouse !== each.id? styling?.circleColor : {}}
                            > 
                                { 
                                    each.completed &&
                                    <div className="circleColor"> 
                                        <img src={check} alt="check"/>
                                    </div>

                                } 
                            </div>
                            <p 
                                className="todo-task__text"
                                style={each.completed ? 
                                    {
                                        textDecoration: "line-through", 
                                        color: "grey",
                                    } : {}
                                }
                            >
                                {each.text}
                            </p>
                        </div>
                        { 
                            delete_button_hover === each.id && 
                            <button
                                className="todo-task__delete-btn"
                                aria-label="Delete task"
                                onClick={() => deleteHandler(each.id)}
                            >
                                <img
                                    src={cross}
                                    alt="Delete"
                                    className="todo-task__delete-icon"
                                />
                            </button>
                        }
                    </div>
                    <hr
                        style={styling?.circleColor}
                        className="todo-task__divider"
                    />
                </div>
            ))}
        </div>
    );
}

export default EachTasks
