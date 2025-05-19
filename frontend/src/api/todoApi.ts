import { Todo } from "@/types/todo";
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.error || error.message || "Unknown error";
    console.error("API Error:", message);
    return Promise.reject(new Error(message));
  }
);

export const getTodos = async (): Promise<Todo[]> => {
  const response = await api.get("/todos");
  return response.data;
};

export const getTodoById = async (id: number): Promise<Todo> => {
  const response = await api.get(`/todos/${id}`);
  return response.data;
};

export const createTodo = async (todo: Todo): Promise<Todo> => {
  const response = await api.post("/todos", todo);
  return response.data;
};

export const updateTodo = async (
  id: number,
  todo: Partial<Todo>
): Promise<Todo> => {
  const response = await api.put(`/todos/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await api.delete(`/todos/${id}`);
};
