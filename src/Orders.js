import React from "react";

const Orders = (props) => {
    const { details } = props;
    console.log(details)

    return (
        <div>
            <h2>{details.name}</h2>
            <p>{details.size}</p>
            {
                !!details.toppings && !!details.toppings.length &&
                    <div>
                        Toppings:
                        <ul>
                            {details.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
                        </ul>
                    </div>
            }
            <p>{details.special}</p>
            
        </div>
    )
}

export default Orders;