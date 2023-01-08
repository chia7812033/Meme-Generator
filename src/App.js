import React from "react";
import "./style.css"
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Meme />
    </div>
  );
}

export default App;
