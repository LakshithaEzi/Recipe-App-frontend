import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import MainCat from "./Components/MainCat";
import Recipe from "./Components/Recipe";
import Card from "./Components/Card";
import wishlist from "./Components/Wishlist";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/MainCat" element={<MainCat />} />
          <Route path="/Recipe" element={<Recipe />} />

          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
