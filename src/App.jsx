import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
//import Header from "./Component/Header/header";
import Hero from "./Component/hero/Hero";
import About from "./Component/about/about";
import TestHeader from "./Component/Header/testHeader";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <>
      <TestHeader />
      <div className="wrapper">
        <Hero />

        <About />
      </div>
    </>
  );
}

export default App;
