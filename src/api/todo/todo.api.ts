import { apiMiddleware } from "../api.middleware";

import { TodoModel } from "models";

export const getTodos = () => apiMiddleware<TodoModel[]>({ method: "GET", ednpoint: "/todo/" });

export const putTodos = (data: any) =>
  apiMiddleware<TodoModel[]>({
    method: "PUT",
    ednpoint: "/todo/",
    data: {
      todos: data,
    },
  });
