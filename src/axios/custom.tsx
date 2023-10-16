import axios from 'axios';

const authFetch2 = axios.create({
  baseURL: 'https://course-api.com',
  headers: {
    Accept: 'application/json',
  },
});

export default authFetch2;
