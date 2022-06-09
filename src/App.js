import React from "react";
import Choose from "./components/Choose.jsx";
import Clients from "./components/Clients.jsx";
import CreateAndSell from "./components/CreateAndSell.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import MarketPlace from "./components/MarketPlace.jsx";
import Subscribe from "./components/Subscribe.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Home />
      <Clients />
      <CreateAndSell />
      <Choose />
      <MarketPlace />
      <Subscribe />
      <Footer />
    </div>
  );
}
