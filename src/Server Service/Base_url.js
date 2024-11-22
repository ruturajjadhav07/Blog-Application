import axios from "axios";

// Base URL for the Axios instance
const BASE_URL = "http://localhost:8080";

// passing baseurl value to object
const Axios = axios.create({ baseURL: BASE_URL });

export default Axios;
