import React from "react";
import "../styles/ProductCard.css";

function ProductCard({ image, name, price, description }) {
  const handleBuyNow = () => {
    alert(`You purchased: ${name}`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">₱{price}</p>
      <p className="product-description">{description}</p>
      <button onClick={handleBuyNow} className="buy-btn">Buy Now</button>
    </div>
  );
}

export default ProductCard;
