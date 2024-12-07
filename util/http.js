import axios from 'axios';

const BACKEND_URL = "https://kopikap-8bfec-default-rtdb.firebaseio.com";
const COLLECTION_USERS = "/users.json";
const COLLECTION_PRODUCTS = "/products.json";

//TRADICIONAL FUNCTION
export async function registrarUsuario(user) {
  console.log("abc")
  const response = await axios.post(BACKEND_URL + COLLECTION_USERS, user);
  console.log( response.data)
  const id = response.data.id;
  return id;
}

// Function to fetch all products
export async function fetchProducts() {
  const response = await axios.get(BACKEND_URL + COLLECTION_PRODUCTS);
  const products = [];

  for (const key in response.data) {
    const product = {
      id: key,
      ...response.data[key],
    };
    products.push(product);
  }

  return products;
}