import axios from 'axios';

const instance = axios.create({
    baseURL:'https://tinder-backend-aiyuuu.herokuapp.com/'
});

export default instance;