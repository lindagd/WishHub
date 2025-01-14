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
        console.error("Error fetching pending wishes:", error);
        return [];
    }
}

export const getPendingWishesCount = async () => {
    try {
        const response = await api.get('/wishes/pending/count')
        return response.data
    } catch (error) {
        console.error("Error fetching pending wishes count:", error)
        return 0
    }
}

export const getAchievedWishes = async () => {
    try {
        const response = await api.get('/wishes/achieved');
        return response.data;
    } catch (error) {
        console.error("Erro fetching achieved wishes:", error);
        return [];
    }
}

export const getAchievedWishesCount = async () => {
    try {
        const response = await api.get('/wishes/achieved/count')
        return response.data
    } catch (error) {
        console.error("Error fetching achieved wishes count:", error)
        return 0
    }
}

export const getTotalSpent = async () => {
    try {
        const response = await api.get('wishes/expenses')
        return response.data
    } catch (error) {
        console.error("Errror fetching total spent:", error)
        return 0.0
    }
}

export const createWish = async(wishData) => {
    try {
        const response = await api.post('/wishes', wishData);
        return response.data;
    } catch (error) {
        console.error("Error creating the wish:", error);
        throw error;
    }
}

export const markAsAchieved = async(id) => {
    try {
        const response = await api.put(`/wishes/${id}/achieve`);
        return response.data;
    } catch (error) {
        console.error("Error editing wish status:", error);
        throw error;
    }
}

export const updateWish = async(id, updatedWish) => {
    await api.put(`/wishes/${id}`, updatedWish);
}

export const deleteWish = async(id) => {
    try {
        await api.delete(`/wishes/${id}`);
    } catch (error) {
        console.error("Error deleting wish:", error);
        throw error;
    }
}

export default api