import { useTodoQuery } from "@/hooks/useTodoQuery";
import { useTodoStore } from "@/store/todoStore";
import { Todo } from "@/types/todo";
import React from "react";
import { useTranslation } from "react-i18next";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const { t } = useTranslation();
  const { editingTodo, setEditingTodo } = useTodoStore();
  const { todos, isLoading, createTodo, updateTodo, deleteTodo } =
    useTodoQuery();

  const handleAddTodo = (todo: Todo) => {
    createTodo(todo);
  };

  const handleToggleTodo = (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    updateTodo({ id, todo: { completed: !todo.completed } });
  };

  const handleUpdateTodo = (todo: Todo) => {
    if (!todo.id) return;
    updateTodo({ id: todo.id, todo });
    setEditingTodo(null);
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  const handleEditClick = (todo: Todo) => {
    setEditingTodo(todo);
  };

  const handleCancelEdit = () => {
    setEditingTodo(null);
  };

  if (isLoading) return <div className="loading">{t("loading")}</div>;

  return (
    <div className="todo-list">
      <h2>{t("todoList")}</h2>

      {editingTodo ? (
        <>
          <h3>{t("editTodo")}</h3>
          <TodoForm
            onSubmit={handleUpdateTodo}
            initialData={editingTodo}
            onCancel={handleCancelEdit}
          />
        </>
      ) : (
        <>
          <h3>{t("addNewTodo")}</h3>
          <TodoForm onSubmit={handleAddTodo} />
        </>
      )}

      <div className="todos">
        {todos.length === 0 ? (
          <div className="empty-state">{t("noTodos")}</div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
              onEdit={handleEditClick}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
