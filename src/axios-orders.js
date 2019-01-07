import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-a0bd0.firebaseio.com/'
});


export default instance;

