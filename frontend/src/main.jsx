import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ParentContext from "./components/Context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
    <ParentContext>
        <App />
      </ParentContext>
    </ChakraProvider>
  </BrowserRouter>
);
