import React, { useState } from "react";
import Meeting from "./Meeting";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/meet/:room" element={<Meeting />} />
      </Routes>
    </div>
  );
}

export default App;
