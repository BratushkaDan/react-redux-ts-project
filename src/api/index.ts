import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export {todosAPI} from "./todosAPI";