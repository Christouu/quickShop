import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req: any) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      //@ts-ignore
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fecthProductsBySearch = (searchQuery: any) =>
  API.get(
    `/post/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
