import axios from "axios";

export const api = axios.create({
    baseURL: "https://perenual.com/api/species-list?page=1&key=sk-PmRY64d7a7e30c48c1856"
})

export const getPosts = async () => {
    const response = await api.get('/post')
    return response.data.data
}