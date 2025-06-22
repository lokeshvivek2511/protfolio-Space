import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize with smooth animations
document.documentElement.style.opacity = '0';
document.documentElement.style.transition = 'opacity 0.5s ease';

createRoot(document.getElementById("root")!).render(<App />);

window.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.opacity = '1';
});