import { Todo } from "@/types/todo";
import React from "react";
import { useTranslation } from "react-i18next";

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onEdit: (todo: Todo) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onEdit,
  onDelete,
}) => {
  const { t } = useTranslation();

  return (
    <div className="todo-item">
      <div className="todo-header">
        <div className="todo-title">
          <input
            type="checkbox"
            className="todo-checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id!)}
          />
          <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
            {todo.title}
          </span>
        </div>
        <div className="todo-actions">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => onEdit(todo)}
          >
            {t("edit")}
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(todo.id!)}
          >
            {t("delete")}
          </button>
        </div>
      </div>
      {todo.description && (
        <div className="todo-description">{todo.description}</div>
      )}
    </div>
  );
};

export default TodoItem;