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
            <label
                className="input-container"
                style={styling?.input_field_backgroundColor}
                onClick={handleContainerClick}
            >
                <div className="circle" style={styling?.circleColor}></div>
                <input
                    ref={inputRef}
                    style={styling?.input_field_backgroundColor}
                    type="text"
                />
            </label>
        </form>
    );
}

export default Form;
