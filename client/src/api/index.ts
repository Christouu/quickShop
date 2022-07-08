import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("user")) {
//     req.headers.authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("user")).accessToken
//     }`;
//   }

//   return req;
// });

export const fecthPostsBySearch = (searchQuery: any) =>
  API.get(
    `/product/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
