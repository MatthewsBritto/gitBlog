import axios from "axios";

export const apiUser = axios.create({

   baseURL: "https://api.github.com/users/"

})

export const apiPost = axios.create({
   baseURL: "https://api.github.com/search"
   

})