

import React, { useState } from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event) {// console.log(event);    
        setName(event.target.value);
    }
    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }
    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }
    function handleShippingChange(e) {
        setShipping(e.target.value);
    }

    return (<><div>
        <p>Name: {name}</p>
        <input value={name} onChange={handleNameChange}
            type="text" />

        <p>Quantity: {quantity}</p>
        <input value={quantity} onChange={handleQuantityChange}
            type="number" />

        <p>Comment: {comment}</p>
        <input value={comment} onChange={handleCommentChange} placeholder='Put delivery instructions'
            type="text" />

        <p>Payment: {payment}</p>
        <select className='select1' value={payment} onChange={handlePaymentChange}>
            <option value="" >Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <br />
        <label htmlFor="">
            <input type="radio" value="Pick Up"
                checked={shipping === "Pick Up"} onChange={handleShippingChange} />
            Pick Up
        </label> <br />
        <label htmlFor="">
            <input type="radio" value="Delivery"
                checked={shipping === "Delivery"} onChange={handleShippingChange} />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>

    </>);

}
export default MyComponent