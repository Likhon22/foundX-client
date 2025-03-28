import envConfig from "@/src/config/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

export default axiosInstance;
