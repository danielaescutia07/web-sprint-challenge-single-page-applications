import React from "react";
import Assets from './Assets/Pizza.jpg';

const homePage = () => {
    return (
     <div>
         <img src={Assets} alt="pizza"/>
         <button id="order-pizza">Order Now</button>
     </div>
    )
}

export default homePage;