import axios from "axios";
const user = JSON.parse(localStorage.getItem("data")) || [];
const accessToken = user.accessToken ?? "";
const refreshtoken = user.refreshtoken ?? "";
// console.log(user);

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    refreshtoken: refreshtoken && refreshtoken,
    Authorization: accessToken && `Bearer ${accessToken}`,
  },
});

export default axiosClient;
