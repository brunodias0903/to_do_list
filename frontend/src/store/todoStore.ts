import { Todo } from "@/types/todo";
import { create } from "zustand";

interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  editingTodo: Todo | null;

  setTodos: (todos: Todo[]) => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (updatedTodo: Todo) => void;
  deleteTodo: (id: number) => void;
  setEditingTodo: (todo: Todo | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  isLoading: false,
  error: null,
  editingTodo: null,

  setTodos: (todos) => set({ todos }),

  addTodo: (todo) =>
    set((state) => ({
      todos: [todo, ...state.todos],
    })),

  updateTodo: (updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      ),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  setEditingTodo: (todo) => set({ editingTodo: todo }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error }),
}));
