import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FooterForm from "./components/FooterForm";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Carousel />} />
      </Routes>
      <Services />
      <FooterForm />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
