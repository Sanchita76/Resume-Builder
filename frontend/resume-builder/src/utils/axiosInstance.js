import axios from 'axios';
import {BASE_URL} from "./apiPaths";

const axiosInstance=axios.create({
    baseURL:BASE_URL,
    headers:{
        'Content-Type':'application/json',
    },
    withCredentials:true, //Include cookies in requests
});

//Request Interceptor to add Authorization header
axiosInstance.interceptors.request.use(
    (config)=>{
        const accesstoken=localStorage.getItem("token");
        if(accesstoken){
            config.headers.Authorization=`Bearer ${accesstoken}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);


//Response Interceptor
axiosInstance.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        //Handle common errors globally
        if(error.response){
            //Unauthorized access - 401
            if(error.response.status===401){
                //Redirect to login or show a modal
                window.location.href="/";
            }else if(error.response.status===500){
                console.error("Server Error: Please try again later.");
            }
        }else if (error.code==="ECONNABORTED"){
            console.error("Request timed out. Please try again.");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
