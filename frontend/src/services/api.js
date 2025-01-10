import axios from "axios"

const API_BASE_URL = 'http://localhost:5129/api'

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const getWishes = async () => {
    const res = await api.get('/wishes');
    return res.data;
};

export const getPendingWishes = async () => {
    try {
        const response = await api.get('/wishes/pending');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar os desejos:", error);
        return undefined;
    }
}

export default api