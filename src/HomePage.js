import React from "react";
import { useHistory } from "react-router-dom";
import Assets from './Assets/Pizza.jpg';

const HomePage = () => {

    const history = useHistory();

    const routeToOrder = () => {
    history.push("/pizza");
}
    return (
     <div>
         <img src={Assets} alt="pizza"/>
         <button onClick={routeToOrder} id="order-pizza">Order Now</button>
     </div>
    )
}

export default HomePage;