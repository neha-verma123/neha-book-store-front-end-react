import { axiosInstance } from "../services/axiosInstance";

function apiGet(url, params = {}) {
  return axiosInstance.get(url, { params });
}

function apiPost(url, body, contentType = "application/json") {
  const headers = {
    "Content-Type": contentType,
  };

  return axiosInstance.post(url, body, {
    headers,
  });
}

function apiPut(url, body, contentType = "application/json") {
  const headers = {
    "Content-Type": contentType,
  };

  return axiosInstance.put(url, body, {
    headers,
  });
}

function apiDelete(url) {
  return axiosInstance.delete(url);
}

export { apiGet, apiPost, apiPut, apiDelete };
