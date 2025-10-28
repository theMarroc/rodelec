import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import Slider from "./components/Slider";
import FooterForm from "./components/FooterForm";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* Rutas */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Services />
              {/* <Slider /> */}
            </>
          }
        />
        <Route
          path="/Services"
          element={
            <>

              <Services />
            </>
          }
        />
      </Routes>


      <FooterForm />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
