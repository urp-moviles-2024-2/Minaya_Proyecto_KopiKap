import axios from 'axios';

const BACKEND_URL = "https://kopikap-8bfec-default-rtdb.firebaseio.com";
const COLLECTION_USERS = "/users.json";
const COLLECTION_COFFEES = "/coffees.json";

//TRADICIONAL FUNCTION
export async function registrarUsuario(user) {
  console.log("abc")
  const response = await axios.post(BACKEND_URL + COLLECTION_USERS, user);
  console.log( response.data)
  const id = response.data.id;
  return id;
}