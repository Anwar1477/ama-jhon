import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props.Product.name)
    const { img, name, seller, price, stock } = props.Product;
    return (

        <div className="product">
            <div>
                <img src={props.Product.img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>only {stock} left in stock-order soon</small></p>
                <button
                className="button"
                onClick={()=>props.handleAddProduct(props.Product)}
                ><FontAwesomeIcon icon={faShoppingCart} />add to card</button>

            </div>


        </div>
    );
};

export default Product;