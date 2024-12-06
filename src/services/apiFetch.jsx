import { axiosInstance } from "../services/axiosInstance";

function apiGet(url, params = {}) {
  return axiosInstance.get(url, { params });
}

function apiPost(url, body, config) {
  return axiosInstance.post(url, body, config);
}

function apiPut(url, body, config) {
  return axiosInstance.put(url, body, config);
}

function apiDelete(url) {
  return axiosInstance.delete(url);
}

export { apiGet, apiPost, apiPut, apiDelete };
