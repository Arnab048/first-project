import React from 'react';

const Cart = (props) => {
    const {cnt,cost,scost} = props;
    return (
        <div>
            <h1>Order Summary</h1>
            <h3>Items ordered: {cnt}</h3>
            <br />
            <h4>Elementary Cost: {(cost).toFixed(2)}</h4>
            <h4>Shipping Cost: {(scost).toFixed(2)}</h4>
            <h4>Tax + VAT: {((cost+scost)/10).toFixed(2)}</h4>
            <h2>Grand Total: {(cost+scost+((cost+scost)/10)).toFixed(2)}</h2>
        </div>
    );
};

export default Cart;