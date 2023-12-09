import axios from "axios";

const customHeaders = {
  "Content-Type": "application/json",
  "Ocp-Apim-Subscription-Key": "962ed46b12364215a95e976478809de1",
};

const AXIOS = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: customHeaders,
});

export default AXIOS;
