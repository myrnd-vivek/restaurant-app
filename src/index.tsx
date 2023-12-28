import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const rootNode = document.getElementById("root");

if (rootNode) {
	const root = ReactDOM.createRoot(rootNode);
	root.render(<App />);
} else {
	throw new Error("Cannot find element with id root");
}
