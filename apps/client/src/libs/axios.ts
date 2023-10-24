import axios from 'axios';

const headers = { 'Access-Control-Allow-Origin': '*' };

export const api = axios.create({
   baseURL: 'http://localhost:3030/api',
   headers,
});
