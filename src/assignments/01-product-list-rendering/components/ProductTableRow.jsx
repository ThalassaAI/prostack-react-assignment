import React from "react";
import Rating from "./Rating";

function ProductTableRow({
  title,
  price,
  discountPercentage,
  rating,
  brand,
  category,
}) {
  const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(2);
  return (
    <tr>
      <td>
        <span className="fw-normal">{title}</span>
      </td>
      <td>
        <span className="fw-bold text-success">₹{discountedPrice}</span>
        <span className="text-decoration-line-through text-muted ms-2 fs-6 fw-light">
          ₹{price}
        </span>
      </td>
      <td>{discountPercentage} %</td>
      <td>
        <Rating rating={rating} />
      </td>
      <td>
        {brand && (
          <span className="fw-semi-bold badge text-bg-primary">
            <i className="bi bi-tag me-1"></i>
            {brand}
          </span>
        )}
      </td>
      <td>
        <span className="badge text-bg-secondary">{category}</span>
      </td>
    </tr>
  );
}

export default ProductTableRow;
