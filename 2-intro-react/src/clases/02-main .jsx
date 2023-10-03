import ReactDOM from "react-dom/client";

import "./index.css";

// const h1 = React.createElement(
//   "div",
//   null,
//   React.createElement("ul", null, React.createElement("li", null, "item 1"))
// );
const h1 = (
  <div>
    <ul>
      <li>Hola Mundo</li>
    </ul>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  h1
);
