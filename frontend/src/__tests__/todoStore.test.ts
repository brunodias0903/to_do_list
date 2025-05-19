import { useTodoStore } from "@/store/todoStore";
import { Todo } from "@/types/todo";
import { beforeEach, describe, expect, it } from "vitest";

describe("Todo Store", () => {
  beforeEach(() => {
    useTodoStore.setState({
      todos: [],
      isLoading: false,
      error: null,
      editingTodo: null,
    });
  });

  it("should set todos", () => {
    const todos: Todo[] = [
      { id: 1, title: "Test Todo 1" },
      { id: 2, title: "Test Todo 2" },
    ];

    useTodoStore.getState().setTodos(todos);

    expect(useTodoStore.getState().todos).toEqual(todos);
  });

  it("should add a todo", () => {
    const todo: Todo = { id: 1, title: "Test Todo" };

    useTodoStore.getState().addTodo(todo);

    expect(useTodoStore.getState().todos).toEqual([todo]);
  });

  it("should update a todo", () => {
    const initialTodo: Todo = { id: 1, title: "Test Todo" };
    const updatedTodo: Todo = { id: 1, title: "Updated Todo" };

    useTodoStore.getState().setTodos([initialTodo]);
    useTodoStore.getState().updateTodo(updatedTodo);

    expect(useTodoStore.getState().todos[0]).toEqual(updatedTodo);
  });

  it("should delete a todo", () => {
    const todo: Todo = { id: 1, title: "Test Todo" };

    useTodoStore.getState().setTodos([todo]);
    useTodoStore.getState().deleteTodo(1);

    expect(useTodoStore.getState().todos).toEqual([]);
  });

  it("should set editing todo", () => {
    const todo: Todo = { id: 1, title: "Test Todo" };

    useTodoStore.getState().setEditingTodo(todo);

    expect(useTodoStore.getState().editingTodo).toEqual(todo);
  });

  it("should set loading state", () => {
    useTodoStore.getState().setLoading(true);

    expect(useTodoStore.getState().isLoading).toBe(true);
  });

  it("should set error state", () => {
    const errorMessage = "Test error";

    useTodoStore.getState().setError(errorMessage);

    expect(useTodoStore.getState().error).toBe(errorMessage);
  });
});
