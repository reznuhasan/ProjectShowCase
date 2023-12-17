import axios from "axios";


export const apiURL=axios.create({
    baseURL:"http://localhost:9090/api/v1/university"
})