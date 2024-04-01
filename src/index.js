import { createRoot } from "react-dom/client";
import FindCity from "./components/FindCity/index.js";


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<FindCity />);