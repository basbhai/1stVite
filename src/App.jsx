import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
//import Header from "./Component/Header/header";
import Hero from "./Component/hero/Hero";
import About from "./Component/about/about";
import TestHeader from "./Component/Header/testHeader";
import Services from "./Component/Services/services";
import Portfolio from "./Component/Portfolio/portfolio";

function App() {
  return (
    <>
      <TestHeader />
      <div className="wrapper">
        <Hero />

        <About />
        <Services />
        <Portfolio />
      </div>
    </>
  );
}

export default App;
