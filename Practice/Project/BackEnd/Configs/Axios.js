import axios from 'axios';
export const config = axios.create({
  baseURL: 'https://dummy-json.mock.beeceptor.com/',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});
