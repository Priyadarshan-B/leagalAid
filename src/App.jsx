import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import AppLayout from "./components/appLayout/appLayout";

function App() {
  return (
    <Router> 
      <Routes>
        <Route
          path="/"
          element={<AppLayout body={<Home />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
