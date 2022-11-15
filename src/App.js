import React from "react";
import Home from "./Home";
import Place from "./Place";
import {Route, Routes } from "react-router-dom";

function App() {
 return (
  <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
      </Routes>
 </section>
 )
}
export default App;
