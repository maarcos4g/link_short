import axios from 'axios';

export const token = "1d45090bc7842f78d0038544c6984d5dce5e8470";

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4/",
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export default api;
