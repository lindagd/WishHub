import axios from "axios"

const API_BASE_URL = 'http://localhost:5129/api'

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const getWishes = async () => {
    const res = await api.get('/wishes');
    return res.data;
};

export default api