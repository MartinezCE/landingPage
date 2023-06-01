import Footer from "./Components/Footer/Footer.jsx";
import Main from "./Components/Main/Main.jsx";
import Header from "./Components/Header/Header.jsx";
import "./index.css";
import React from "react";
import "aos/dist/aos.css";
import GridTemplate from "./Components/GridTemplate/GridTemplate.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import ImageLoader from "./Components/ImageLoader/ImagenLoader.jsx";

function App() {
  
  return (
    <div>
    <ImageLoader>
      <Header />
      <Main>
        <GridTemplate />
        <Contact />
      </Main>
      <Footer />
    </ImageLoader>
  </div>
  );
}

export default App;
