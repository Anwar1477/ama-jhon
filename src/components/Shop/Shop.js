import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Card from '../Card/Card';
//import {addToDatabaseCart} from '../../utilities/databaseManager';

const Shop = () => {
    const frist10=fakeData.slice(0,10);
    const [products, setProduct]=useState(frist10);
    const [cart,setCart]=useState([]);

    const handleAddProduct = (product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                 {
                 products.map(pd=><Product 
                    handleAddProduct={handleAddProduct}
                    Product={pd}
                    ></Product>)
                 }
            
            </div>
            <div className="cart-container">
                 <Card cart={cart}></Card>
            </div>

        </div>
    );
};

export default Shop;