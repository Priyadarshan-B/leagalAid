import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/appLayout/appLayout";
import Home from "./pages/Home/home";
import Events from "./pages/Events/events";
import Lac from "./pages/Lac/Lac";
import OfficeBearers from "./pages/OfficeBearers/officebearers";

function App() {
  return (
    <Router>
      <AppLayout
      body={
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/lac" element={<Lac />} />
          <Route path="/officebearers" element={<OfficeBearers />} />

        </Routes>
      }
      />
    </Router>
  );
}

export default App;
