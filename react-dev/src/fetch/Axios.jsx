import axios from "axios";


export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    timeout:5000,
    headers:{
        'Content-Type': 'application/json; charset=utf-8'
    }
})