import { createTodo, deleteTodo, getTodos, updateTodo } from "@/api/todoApi";
import { useTodoStore } from "@/store/todoStore";
import { Todo } from "@/types/todo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useTodoQuery = () => {
  const queryClient = useQueryClient();
  const { setError } = useTodoStore();

  const { data: todos, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  const createTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error: unknown) => {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      setError(`Failed to create todo: ${errorMessage}`);
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: ({ id, todo }: { id: number; todo: Partial<Todo> }) =>
      updateTodo(id, todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error: unknown) => {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      setError(`Failed to update todo: ${errorMessage}`);
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error: unknown) => {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      setError(`Failed to delete todo: ${errorMessage}`);
    },
  });

  return {
    todos: todos || [],
    isLoading,
    createTodo: createTodoMutation.mutate,
    updateTodo: updateTodoMutation.mutate,
    deleteTodo: deleteTodoMutation.mutate,
  };
};
