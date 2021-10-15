import React from "react";

const PizzaForm = () => {
    return (
        <div>
            <h2>Make My Pizza!</h2>
            <form id="pizza-form">
                <div>
                    <label>Name
                        <input
                            id="name-input"
                            type="text"
                            name="name"
                            value=""
                            onChange=""
                        />
                    </label>
                    <label>Size
                        <select id="size-dropdown" onChange="" value="" name="size">
                            <option value=''>--Select an option--</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                </div>
                <div className="checkboxes">
                    <label>pepperoni
                        <input
                            type="checkbox"
                            name="pepperoni"
                            onChange=""
                            checked=""
                        />
                    </label>
                    <label>mushrooms
                        <input
                            type="checkbox"
                            name="mushrooms"
                            onChange=""
                            checked=""
                        />
                    </label>
                    <label>olives
                        <input
                            type="checkbox"
                            name="olives"
                            onChange=""
                            checked=""
                        />
                    </label>
                    <label>jalapeños
                        <input
                            type="checkbox"
                            name="jalapeños"
                            onChange=""
                            checked=""
                        />
                    </label>
                </div>
                <div>
                    <label>Special Instructions
                        <input
                            id="special-text"
                            type="text"
                            name="special"
                            value=""
                            onChange=""
                        />
                    </label>
                </div>
                <div>
                    <button id="order-button">Add to Order</button>
                </div>
            </form>
        </div>
    )
}

export default PizzaForm;