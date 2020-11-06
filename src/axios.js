import axios from 'axios';

const trans_axios = axios.create({
  baseURL: 'http://23.254.228.118:8080/API',
});

export default trans_axios;
