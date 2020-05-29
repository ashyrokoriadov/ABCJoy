import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <Menu />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
