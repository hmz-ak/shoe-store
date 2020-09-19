import React from "react";
import ShoeContextProvider from "./context/ShoeContext";
import Shoes from "./components/Shoes";
import "./App.css";
import AppBar from "./components/AppBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ShoeContextProvider>
      <AppBar />
    </ShoeContextProvider>
  );
}

export default App;
