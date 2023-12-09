import React from "react";
import Router from "./Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./style/app.scss";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
