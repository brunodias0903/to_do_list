import { Todo } from "@/types/todo";
import React from "react";
import { useTranslation } from "react-i18next";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
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
            onChange={() => onToggle(todo.id!)}
          />
          <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
            {todo.title}
          </span>
        </div>
        <div className="todo-actions">
          <button
            onClick={() => onEdit(todo)}
            className="btn btn-sm btn-primary"
          >
            {t("edit")}
          </button>
          <button
            onClick={() => onDelete(todo.id!)}
            className="btn btn-sm btn-danger"
          >
            {t("delete")}
          </button>
        </div>
      </div>
      {todo.description && (
        <p className="todo-description">{todo.description}</p>
      )}
    </div>
  );
};

export default TodoItem;
