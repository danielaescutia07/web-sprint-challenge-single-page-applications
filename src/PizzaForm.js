import React from "react";
import { Link } from 'react-router-dom';

const PizzaForm = (props) => {
    const { values, change, submit, errors, disabled } = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <div>
            <h2>Make My Pizza!</h2>
            <div style={{color: 'red'}}>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>
            <form id="pizza-form" onSubmit={submit}>
                <div>
                    <label>Name
                        <input
                            id="name-input"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
                    <label>Size
                        <select id="size-dropdown" onChange={onChange} value={values.size} name="size">
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
                            onChange={onChange}
                            checked={values.pepperoni}
                        />
                    </label>
                    <label>mushrooms
                        <input
                            type="checkbox"
                            name="mushrooms"
                            onChange={onChange}
                            checked={values.mushrooms}
                        />
                    </label>
                    <label>olives
                        <input
                            type="checkbox"
                            name="olives"
                            onChange={onChange}
                            checked={values.olives}
                        />
                    </label>
                    <label>jalapeños
                        <input
                            type="checkbox"
                            name="jalapeños"
                            onChange={onChange}
                            checked={values.jalapeños}
                        />
                    </label>
                    <label>spinach
                        <input
                            type="checkbox"
                            name="spinach"
                            onChange={onChange}
                            checked={values.spinach}
                        />
                    </label>
                </div>
                <div>
                    <label>Special Instructions
                        <input
                            id="special-text"
                            type="text"
                            name="special"
                            value={values.special}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div>
                    <Link to="/pizza/order">
                    <button disabled={disabled} id="order-button">Add to Order</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default PizzaForm;