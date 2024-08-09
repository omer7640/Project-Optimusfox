import axios from "axios";

// axios.interceptors.request.use((config) => {
//   config.headers.Authorization = "Bearer token";
//   return config;
// });

const api = axios.create({ baseURL: "http://localhost:5173" });

api.interceptors.request.use(function (config) {
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o";
  const token = "";

  // const token = localStorage.getItem(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log(token);
  }
  return config;
});
export default api;
