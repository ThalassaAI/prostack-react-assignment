import React from "react";
import Product from "./Product";
import Spinner from "./Spinner";
import Error from "./Error";
import ProductTableRow from "./ProductTableRow";
import useFetchProducts from "../hooks/useFetchProducts";

function ProductsTable() {
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
        <div className="col-md-12">
          <table className="table table-hover table-striped table-bordered table-sm ">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Discount</th>
                <th scope="col">Rating</th>
                <th scope="col">Brand</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              {products?.length > 0 &&
                products.map((product) => (
                  <ProductTableRow key={product.id} {...product} />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductsTable;
