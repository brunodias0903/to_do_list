import { Todo } from "@/types/todo";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface TodoFormProps {
  onSubmit: (todo: Todo) => void;
  initialData?: Todo;
  onCancel?: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  onSubmit,
  initialData,
  onCancel,
}) => {
  const { t } = useTranslation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description || "");
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    onSubmit({
      ...initialData,
      title,
      description: description || undefined,
    });

    if (!initialData) {
      setTitle("");
      setDescription("");
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    if (onCancel) onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder={t("todoTitle")}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder={t("description")}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />
      </div>
      <div className="form-group">
        {onCancel && (
          <button
            type="button"
            className="btn cancel-btn"
            onClick={handleCancel}
          >
            {t("cancel")}
          </button>
        )}
        <button type="submit" className="btn btn-primary">
          {initialData ? t("updateTodo") : t("addTodo")}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
