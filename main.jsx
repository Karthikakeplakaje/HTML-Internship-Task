import { createRoot } from "react-dom/client";

import Child from "./child.jsx";
import App from "./App.jsx";

createRoot(document.querySelector("#root")).render(
  <>
    <Child />
    <App />
  </>
);
 
  
