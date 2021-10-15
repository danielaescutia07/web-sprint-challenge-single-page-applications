import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import schema from "./validation/schema";
import * as yup from 'yup';

//*Custom Components
import PizzaForm from "./PizzaForm";
import HomePage from "./HomePage";
import Orders from "./Orders";

//*Initial Values
const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  mushrooms: false,
  olives: false,
  jalapeños: false,
  spinach: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: ''
}

const initialDisabled = true;

const myOrder = {
  name: 'Dani Escutia',
  size: 'Large',
  pepperoni: false,
  mushrooms: true,
  olives: true,
  jalapeños: true,
  spinach: false,
  special: 'Please cut in squares.'
}

const App = () => {
  const [orders, setOrders] = useState([myOrder]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disable, setDisabled] = useState(initialDisabled);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([res.data, ...orders]);
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }

  //*Validation
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }


  //*OnChange
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value})
  }

  //*Submit
  const submit = (evt) => {
    evt.preventDefault();
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      toppings: ['pepperoni', 'mushrooms', 'olives', 'jalapeños', 'spinach'].filter(topping => !!formValues[topping])
    };
    postNewOrder(newOrder);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

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
        <Route path="/pizza/order">
            {orders.map((order, idx) => (
              <Orders key={idx} details={order} />
            ))}
        </Route>
        <Route path="/pizza">
          <PizzaForm values={formValues} change={inputChange} submit={submit} errors={formErrors} disable={disable} />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      
    </div>    
  );
};
export default App;
