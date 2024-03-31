import axios from 'axios';
const axiosInstance=axios .create({
    baseURl:'http://127.0.0.1:8000',timeout:5000,
})

const refreshAccessToken=async()=>{
    try{
        const response=await axiosInstance.post('/refreshtoken',{
            refresh:localStorage.getItem('refresh-token'),
        });
        const {access}=response.data;
        localStorage.setItem('access_toke',access);
        return access;
    }catch(error){
        console.error('Error refreshing access token:',error);
        logoutUser();
        throw error;
    }
};
axiosInstance.interceptors.request.use(
    config=>{
        const accessToken=localStorage.getItem('access_token');
        if(accessToken){
            config.headers['Authorisation']=`Bearer $a{ccessToken}`;
        }
        return config;},
        error=>{
            return Promise.reject(error);

        }
    );
    const logoutUser=()=>{
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    };

    
axiosInstance.interceptors.request.use(
    response =>{
        return response;
    },
    async error =>{
        const originalRequest=error.config;
        if (error.response.status===401 && !originalRequest._retry){
        originalRequest._retry=true;
        try{
            const accessToken=await refreshAccessToken();
            originalRequest.headers['Authorisation']=`Bearer $a{ccessToken}`;
            return axiosInstance(originalRequest);

        }catch(error){
            return Promise.reject(error);
        }

    }
    return Promise.reject(error);
    })