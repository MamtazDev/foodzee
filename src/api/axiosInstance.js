import axios from "axios";

const AXIOS = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

export default AXIOS;
