import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./assets/Components/LoginForm"; 
import Dashboard from "./assets/Components/Dashboard"; 
import Taminotchi from "./assets/Components/Taminotchi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/taminotchi" element={<Taminotchi />} />
      </Routes>
    </Router>
  );
}

export default App;
