import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/Pages/Home";
import Info from "./component/Info/Info";
import Player from "./component/Pages/Player/Player";
import FilmsCatalog from "./component/FilmsCatalog/FilmsCatalog";
import Favorit from "./component/Pages/Favorit/Favorit";
import LoginPage from "./component/Pages/LoginPage";
import { useSelector } from "react-redux";
import "./css/App.css";
import { RootState } from "./component/store/store";

function App() {
  const authState = useSelector((state: RootState) => state.auth.value);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const locale = localStorage.getItem("isAuthenticated") === "true";
  useEffect(() => {
    if (authState || locale) {
      setIsAuth(true);
    }
  }, [authState]);

  return (
    <div className="App">
      {isAuth ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/:id" element={<Info />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="/filmscatalog" element={<FilmsCatalog />} />
          <Route path="/favorit" element={<Favorit />} />
          <Route path="*" element={<Home />} />
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Navigate to={"/login"} />
        </>
      )}
    </div>
  );
}

export default App;
