import axios from "axios";

const host = 'http://localhost:8080'

const API = {
     login: (email, pass, success) => {
        axios.post(`${host}/api/users/login`,{email:email, password: pass})
        .then(res =>{
            success(res)
        });
     },
     getUsers: (token, success) => {
        axios.get(`${host}/api/users?access_token=${token}`)
        .then(res => {
            success(res)
        });
     },
     getPosts: (token, success) => {
        axios.get(`${host}/api/Posts?access_token=${token}`)
        .then(res => {
            success(res)
        });
     },
     addPost: (post,token, success) => {
        console.log("we are adding:", post)
        axios.post(`${host}/api/Posts?access_token=${token}`, post)
        .then(res =>  {
            success(res)
        });
     }
}

export default API;