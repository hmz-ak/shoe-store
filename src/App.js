import React from "react";
import ShoeContextProvider from "./context/ShoeContext";
import Shoes from "./components/Shoes";
import "./App.css";

function App() {
  return (
    <div>
      <ShoeContextProvider>
        <Shoes />
      </ShoeContextProvider>
    </div>
  );
}

export default App;
