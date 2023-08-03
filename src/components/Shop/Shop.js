import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProduct]=useState(first10);
    
    const [cnt,setCnt] = useState(0);
    const [cost,setCost] = useState(0);
    const [scost,setScost] = useState(0);

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map((product)=>
                        <Product product={product} cnt={cnt} setCnt={setCnt} cost={cost} setCost={setCost} scost={scost} setScost={setScost}></Product>
                    )
                }
            </div>
            <div className="cart">
                <Cart cnt={cnt} cost={cost} scost={scost}></Cart>
            </div>
        </div>
    );
};

export default Shop;