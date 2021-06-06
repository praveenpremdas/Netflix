import React from "react";
import NavBar from "./components/navBar/navBar";
import "./app.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { action, orginals } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={orginals} title="Netflix Orginals" />
      <RowPost url={action} title="Action" isSmall />
    </div>
  );
}

export default App;
