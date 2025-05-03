import { useEffect, useState } from "react";
import fetchProducts from "../api/productApi";
import axios from "axios";

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);

      try {
        const products = await fetchProducts(source.token);
        setProducts(products);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, []);

  return { products, loading, error };
}

export default useFetchProducts;
