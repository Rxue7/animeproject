import axios from "axios";

export default axios.create({
    baseURL: 'https://d5f2-135-0-75-35.ngrok-free.app',
    headers: { "ngrok-skip-browser-warning": "true" }
});