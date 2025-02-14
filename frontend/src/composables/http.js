import axios from "axios";

const $fetcher = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'my-api-key': import.meta.env.VITE_APP_MY_API_KEY,
    "Access-Control-Allow-Methods": "GET,HEAD,PATCH,POST,PUT",
    'lang': localStorage.getItem('locale') || 'ar'
  }
});

$fetcher.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  },
);

export default $fetcher;
