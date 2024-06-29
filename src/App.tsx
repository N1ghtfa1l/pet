import React from "react";
import "./css/App.css";
import Home from "./component/Pages/Home";
import Info from "./component/Info/Info";
import { Routes, Route } from "react-router-dom";
import Player from "./component/Pages/Player";
import FilmsCatalog from "./component/FilmsCatalog/FilmsCatalog";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/filmscatalog" element={<FilmsCatalog />} />
      </Routes>
    </div>
  );
}

export default App;
