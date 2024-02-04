import axios from "axios";

const httpService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const nextService = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export { httpService, nextService };
