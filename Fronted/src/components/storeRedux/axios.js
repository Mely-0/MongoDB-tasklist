import axios from "axios";
const axiosApi = axios.create({
    baseURL: "http://localhost:8070",
    headers: { "Content-Type": "application/json" }
})
export default axiosApi