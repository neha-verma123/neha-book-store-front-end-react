import axios from "axios";
import { axiosError } from "./axiosError";

const axiosInstance = axios.create({
  baseURL: "https://neha-book-store-backend.onrender.com/api/books",
  // baseURL: "http://192.168.29.239:4200/api/books",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("access_token");

  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => axiosError(err)
);

export { axiosInstance };
