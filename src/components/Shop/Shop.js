import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';


const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProduct]=useState(first10);
    
    const [cnt,setCnt] = useState(0);
    const [cost,setCost] = useState(0);

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map((product)=>
                        <Product product={product} cnt={cnt} setCnt={setCnt} cost={cost} setCost={setCost}></Product>
                    )
                }
            </div>
            <div className="cart">
                This is cart {cnt}
                <br/>
                Cost {cost}
            </div>
        </div>
    );
};

export default Shop;