import React from "react";
import "./css/App.css";
import Home from "./component/Pages/Home";
import Info from "./component/Info/Info";
import { Routes, Route } from "react-router-dom";
import Player from "./component/Pages/Player/Player";
import FilmsCatalog from "./component/FilmsCatalog/FilmsCatalog";
import Favorit from "./component/Pages/Favorit/Favorit";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/filmscatalog" element={<FilmsCatalog />} />
        <Route path="/favorit" element={<Favorit />} />
      </Routes>
    </div>
  );
}

export default App;
