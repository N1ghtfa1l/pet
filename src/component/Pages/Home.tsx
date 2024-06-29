import React from "react";
import Header from "../header/Header";
import Intro from "../Intro/Intro";
import Films from "../Films/Films";
function Home() {
  return (
    <div className="App">
        <Header />
        <Intro />
        <Films />
    </div>
  );
}

export default Home;
