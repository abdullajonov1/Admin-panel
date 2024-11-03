import React from "react";
import ReactDOM from "react-dom/client"; // createRoot funksiyasi uchun to'g'ri import
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import Dashboard from "./assets/Components/Dashboard";
import Taminotchi from "./assets/Components/Taminotchi";

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot ishlatilmoqda

root.render(
  <ChakraProvider>
    <App />
    {/* <Dashboard/> */}
    {/* <Taminotchi/> */}
  </ChakraProvider>
);



