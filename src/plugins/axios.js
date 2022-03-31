import axios from "axios";

import store from "stores";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = store.state.sample.token
    ? `Bearer ${store.state.sample.token}`
    : null;
  if (token) {
    if (store.state.sample.token) {
      config.headers.Authorization = token;
    }
  }
  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
    // eslint-disable-next-line comma-dangle
  }
);

export default instance;
