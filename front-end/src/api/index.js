import axios from "axios";

// const API = axios.create({ baseURL: "http://13.114.85.117:3020/" });
const API = axios.create({ baseURL: "https://localhost:7044/api" });

export const fectchUsers = () => API.get(`/book`);
export const createUser = (user) => API.post("/users", user);
export const updateUser = (id, updatedUser) =>
  API.put(`/users/${id}`, updatedUser);
export const deleteUser = (id) => API.delete(`/users/${id}`);
