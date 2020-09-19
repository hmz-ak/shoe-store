import React from "react";
import ShoeContextProvider from "./context/ShoeContext";
import Shoes from "./components/Shoes";
import "./App.css";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shoe_detail from "./components/shoe_detail";
import Women_Page from "./components/Women_page";
import Kids_Page from "./components/Kids_page";
import Men_Page from "./components/Men_page";
import Home from "./components/Home";

function App() {
  return (
    <ShoeContextProvider>
      <Router>
        <AppBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="men" element={<Men_Page />}></Route>

          <Route path="women" element={<Women_Page />} />
          <Route path="kids" element={<Kids_Page />} />
          <Route path="men/:id" element={<Shoe_detail />} />
        </Routes>

        <Footer />
      </Router>
    </ShoeContextProvider>
  );
}

export default App;
