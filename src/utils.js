import axios from "axios";
const Base_url = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const response = await axios.get(`${Base_url}/products`);
  return response.data;
};
