import axios from "axios";

export const jokesAPI = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    // headers: {
    //   Authorization: 'Bearer {token}'
    // }
  })
