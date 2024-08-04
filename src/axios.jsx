import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://beancp.com:8082',
    withCredentials: true, // 쿠키를 포함합니다.
});

export default instance;