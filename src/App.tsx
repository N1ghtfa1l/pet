import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/Pages/Home";
import Info from "./component/Info/Info";
import Player from "./component/Pages/Player/Player";
import FilmsCatalog from "./component/FilmsCatalog/FilmsCatalog";
import Favorit from "./component/Pages/Favorit/Favorit";
import LoginPage from "./component/Pages/LoginPage";
import "./css/App.css";
import { useSelector } from "react-redux";
import { RootState } from "./component/store/store";

function App() {
  const auth = useSelector((state: RootState) => state.auth.value);
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  return (
    <div className="App">
      {auth || isAuthenticated ? (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/info/:id" element={<Info />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="/filmscatalog" element={<FilmsCatalog />} />
          <Route path="/favorit" element={<Favorit />} />
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Navigate to="/login" />
        </>
      )}
    </div>
  );
}

export default App;
