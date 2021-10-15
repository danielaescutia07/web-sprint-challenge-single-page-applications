import React from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";

//*Custom Components

import PizzaForm from "./PizzaForm";
import HomePage from "./HomePage";

const App = () => {
  return (
    <div className="homePage">
      <header>
          <nav>
            <h1>Lambda Eats</h1>
            <Link to="/">Home</Link>
            <Link to="/pizza">Order</Link>
          </nav>
      </header>
      <Switch>
        <Route path="/pizza">
          <PizzaForm />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>    
  );
};
export default App;
