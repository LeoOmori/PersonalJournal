const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3333',
});

// Response interceptor for API calls
axiosInstance.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.response.data.message.name === "TokenExpiredError"  && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refreshToken');
        try{
            const tokens = axiosInstance.post('/refreshToken', {
                refreshToken
            });
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + tokens.data.token;
            return axiosInstance(originalRequest);
            
        }catch(e){
            return Promise.reject(error);
        }
    }
    return Promise.reject(error);
});

export default axiosInstance;