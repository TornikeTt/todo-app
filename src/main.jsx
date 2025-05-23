import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/01-App/App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
