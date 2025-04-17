import { useRef , useState } from "react";
import "./Form.scss";

function Form({ styling , setTodo , todo}) {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    const handleContainerClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleChange = (e) => { 
        let value = e.target.value 
        setInput(value)
    }

    const submitHandler = (e) => { 
        e.preventDefault()

        const newTodo = {
            id: Date.now(),
            completed: false,
            text: input,
        };

        setTodo((prev) => [...prev, newTodo]);
        setInput("");
    }

    return (
        <form onSubmit={submitHandler}>
            <label
                className="input-container"
                style={styling?.input_field_backgroundColor}
                onClick={handleContainerClick}
            >
                <div className="circle" style={styling?.circleColor}></div>
                <input
                    value={input}
                    ref={inputRef}
                    placeholder="What do you need to get done today?"
                    type="text"
                    style={styling?.input_field_backgroundColor}
                    onChange={handleChange}
                    required
                />
            </label>
        </form>
    );
}

export default Form;
