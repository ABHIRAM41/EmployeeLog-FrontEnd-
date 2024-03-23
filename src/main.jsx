import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ContextAPI from "./Contextapi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ContextAPI>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextAPI>
    </ChakraProvider>
  </React.StrictMode>
);
