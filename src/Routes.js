import React from "react";
import Home from "./components/pages/home/index";
import About from "./components/pages/about/index";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/index";

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
