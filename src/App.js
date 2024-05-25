import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// css
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/css/variables.css";
import "./assets/css/main.css";

import Home from "./components/Home";
import Sol from "./components/Sol";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sol" element={<Sol />} />
      </Routes>
    </Router>
  );
}

export default App;
