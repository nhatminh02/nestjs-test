import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3020" });

export const fectchUsers = () => API.get(`/users`);
export const createUser = (user) => API.post("/users", user);
export const updateUser = (id, updatedUser) =>
  API.put(`/users/${id}`, updatedUser);
export const deleteUser = (id) => API.delete(`/users/${id}`);