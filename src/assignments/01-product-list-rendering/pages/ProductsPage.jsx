import React from "react";
import ProductGrid from "../components/ProductsGrid";
import ProductsTable from "../components/ProductsTable";

function ProductsPage({ type = "grid" }) {
  if (type === "table") {
    return <ProductsTable />;
  }

  return <ProductGrid />;
}

export default ProductsPage;
