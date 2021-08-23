import React from "react";
import "./ProductCard.css";

function ProductCard({product, removeProduct}) {

    return (
        <div className="product-card">
            <div style ={{position: "relative"}} key={product.id}>
                <button className="delete-button" onClick={() => removeProduct(product.id)}>
                    <img src="./images/deletebutton.svg" alt="delete button"/>
                </button>
                <img src={product.url} alt="img product" className="img-product"/>
            </div>
            <h1 className="product-name">{product.name}</h1>
            <p className="product-description">
                {product.description}
            </p>
            <span className="product-price">{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.</span>
        </div>
    );
}

export default ProductCard;