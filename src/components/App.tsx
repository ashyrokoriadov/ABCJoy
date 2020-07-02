import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./MenuItems/Menu";
import Header from "./Header";
import Content from "./Content";
import EmptyContent from "./EmptyContent";
import SettingsContent from "./SettingsContent";
import Footer from "./Footer";

export default function App(): JSX.Element {
  return (
    <div className="container">
      <Menu />
      <Header />
      <Footer />
      <Switch>
        <Route exact path="/" component={EmptyContent} />
        <Route exact path="/settings" component={SettingsContent} />
        <Route path="/:abc/:type" render={(props) => <Content {...props} />} />
      </Switch>
    </div>
  );
}
