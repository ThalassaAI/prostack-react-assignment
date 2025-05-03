import React from "react";
import { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import QuantitySelectorButton from "./QuantitySelectorButton";
import Carousel from "./Carousel";
import Rating from "./Rating";

function Product({
  // image,
  id,
  images,
  title,
  price,
  description,
  discountPercentage,
  tags,
  category,
  rating,
  stock,
  brand,
}) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const totalPrice = (price * quantity).toFixed(2);
  const discountedTotalPrice = (
    totalPrice *
    (1 - discountPercentage / 100)
  ).toFixed(2);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      } else {
        return 1;
      }
    });
  };

  const handleToggleFavorite = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div className="card h-100 position-relative">
      {/* <img src={image} className="card-img-top" alt={title} /> */}
      <Carousel id={id} images={images} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description.slice(0, 50).concat("...")}</p>
        {/* <p className="card-text">
          {tags.map((tag) => (
            <span key={tag} className="badge bg-secondary me-1">
              {tag}
            </span>
          ))}
        </p> */}
        <div className="d-flex gap-2 align-items-center mt-3">
          <span className="badge text-bg-primary d-flex align-items-center gap-1">
            <i className="bi bi-tag-fill"></i>
            {brand}
          </span>
          <Rating rating={rating} />
        </div>
        <p className="card-text">
          <span className="me-2 fs-5 fw-bold">₹{discountedTotalPrice}</span>
          <span className="me-2 text-decoration-line-through text-muted">
            ₹{totalPrice}
          </span>
          <span className="fw-bold text-success">
            {discountPercentage}% Off
          </span>
        </p>

        <div className="d-flex align-items-center mt-3 gap-1">
          <QuantitySelectorButton
            value={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            min={1}
            max={99}
          />
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={handleToggleFavorite}
            customClasses="ms-2 position-absolute top-0 end-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
