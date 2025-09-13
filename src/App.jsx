import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Services from "./components/Services";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Carousel />} />
      </Routes>
      <Services />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
