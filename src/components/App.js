import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./MenuItems/Menu";
import Header from "./Header";
import Content from "./Content";
import EmptyContent from "./EmptyContent";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <Menu />
      <Header />
      <Footer />
      <Switch>
        <Route exact path="/" component={EmptyContent} />
        <Route path="/:abc/:type" render={(props) => <Content {...props} />} />
      </Switch>
    </div>
  );
}
