import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2c3add5968ce4689bceae82cdb10e3a9'
    }
})