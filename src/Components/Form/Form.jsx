import { useRef } from "react";
import "./Form.scss";

function Form(props) {
    const inputRef = useRef(null);

    const styling = {
        input_field_backgroundColor: {
            backgroundColor: props.isDarkMode
                ? "hsl(235, 24%, 19%)"
                : "hsl(0, 0%, 98%)",
            color: props.isDarkMode
                ? "hsl(234, 39%, 85%)"
                : "hsl(235, 19%, 35%)",
        },

        circleColor: {
            borderWidth: "1px",
            borderColor: props.isDarkMode
                ? "hsl(237, 14%, 26%)"
                : "hsl(236, 33%, 92%)",
            borderStyle: "solid",
        },
    };

    const handleContainerClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <form>
            <div
                className="input-container"
                style={styling.input_field_backgroundColor}
                onClick={handleContainerClick} // Focus input when container is clicked
            >
                <div className="circle" style={styling.circleColor}></div>
                <input
                    ref={inputRef} // Attach reference to input
                    style={styling.input_field_backgroundColor}
                    type="text"
                />
            </div>
        </form>
    );
}

export default Form;
