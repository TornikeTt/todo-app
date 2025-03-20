import { useRef } from "react";
import "./Form.scss";

function Form({ styling }) {
    const inputRef = useRef(null);

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
