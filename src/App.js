import React from "react";
import ShoeContextProvider from "./context/ShoeContext";
import Shoes from "./components/Shoes";
import "./App.css";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ShoeContextProvider>
      <AppBar />
      <Footer />
    </ShoeContextProvider>
  );
}

export default App;
