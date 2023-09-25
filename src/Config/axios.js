import axios from "axios";

export const server = "https://api.quran.com/api/v4/";

const instance = axios.create({
  baseURL: server,
});

// instance.interceptors.request.use((request) => {
//   let token = localStorage.getItem("jwt");

//   request.headers = {
//     Accept: "application/json, text/plain, */*",
//     Authorization: `Bearer ${token}`,
//   };
//   return request;
// });

export default instance;
