import React from "react";
import Product from "./Product";
import Spinner from "./Spinner";
import Error from "./Error";
import useFetchProducts from "../hooks/useFetchProducts";

function ProductsGrid() {
  const { products, error, loading } = useFetchProducts();

  if (loading) {
    return Spinner();
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {products?.length > 0 &&
          products.map((product) => (
            <div className="col-sm-6 col-md-4  mb-4" key={product.id}>
              <Product
                id={product.id}
                images={product.images}
                image={product.thumbnail}
                title={product.title}
                price={product.price}
                description={product.description}
                discountPercentage={product.discountPercentage}
                tags={product.tags}
                category={product.category}
                rating={product.rating}
                stock={product.stock}
                brand={product.brand}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductsGrid;
