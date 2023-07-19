import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Checkout,
  Error,
  Private,
} from "./pages";

function App() {
  return (
    <Router>
      <h4>comfy sloth starter</h4>
      <Home></Home>
    </Router>
  );
}

export default App;
