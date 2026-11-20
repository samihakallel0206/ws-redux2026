import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./JS/store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* le lien entre redux et react */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
