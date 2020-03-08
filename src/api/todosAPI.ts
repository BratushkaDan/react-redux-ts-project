import {instance} from "API";
import {ITodo, ITodoQueryParams} from "API/types";

export const todosAPI = {
  getTodos: (params: ITodoQueryParams = {offset: 0, limit: 10}): Promise<ITodo[]> => instance.get<ITodo[]>(`/todos?_start=${params.offset}&_limit=${params.limit}`).then(response => response.data)
};