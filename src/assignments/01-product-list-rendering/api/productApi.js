import axios from "axios";

const PRODUCT_URL = "https://dummyjson.com/products";

export const fetchProducts = async (cancelToken) => {
  try {
    const response = await axios.get(PRODUCT_URL, {
      cancelToken,
    });
    if (response.status !== 200) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }
    return response.data.products;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled", error.message);
    } else {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
};

export default fetchProducts;
