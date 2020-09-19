import React from "react";
import ShoeContextProvider from "./context/ShoeContext";
import Shoes from "./components/Shoes";
import "./App.css";
import AppBar from "./components/AppBar";

function App() {
  return (
    <div>
      <ShoeContextProvider>
        <AppBar />
        <Shoes />
      </ShoeContextProvider>
    </div>
  );
}

export default App;
