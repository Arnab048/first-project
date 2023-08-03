import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {product,cnt,setCnt,cost,setCost,scost,setScost} = props;
    function onClickHandler() {
        setCnt(cnt+1);
        setCost(cost+product.price);
        setScost(50);
    }
    return (
        <div className="product">
            <div>
                <img src={product.img} alt="" />
            </div>
            <div>
                <h4 className="product-name">
                    {product.name}
                </h4>
                <br />
                <p><small>by: {product.seller}</small></p>
                <p>${product.price}</p>
                <p><small>Only {product.stock} left in stock</small></p>
                <button onClick={onClickHandler} className="main-button"><FontAwesomeIcon icon={faShoppingCart} />       add to cart</button>
            </div>
        </div>
    );
};

export default Product;