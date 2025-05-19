import TodoForm from "@/components/TodoForm";
import { Todo } from "@/types/todo";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: vi.fn(),
    },
  }),
}));

describe("TodoForm Component", () => {
  const mockSubmit = vi.fn();
  const mockCancel = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders empty form correctly", () => {
    render(<TodoForm onSubmit={mockSubmit} />);

    expect(screen.getByPlaceholderText("todoTitle")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("description")).toBeInTheDocument();
    expect(screen.getByText("addTodo")).toBeInTheDocument();
    expect(screen.queryByText("cancel")).not.toBeInTheDocument();
  });

  it("renders form with initial data correctly", () => {
    const initialData: Todo = {
      id: 1,
      title: "Test Todo",
      description: "Test Description",
    };

    render(
      <TodoForm
        onSubmit={mockSubmit}
        initialData={initialData}
        onCancel={mockCancel}
      />
    );

    expect(screen.getByDisplayValue("Test Todo")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test Description")).toBeInTheDocument();
    expect(screen.getByText("updateTodo")).toBeInTheDocument();
    expect(screen.getByText("cancel")).toBeInTheDocument();
  });

  it("submits form with entered data", () => {
    render(<TodoForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByPlaceholderText("todoTitle"), {
      target: { value: "New Todo" },
    });

    fireEvent.change(screen.getByPlaceholderText("description"), {
      target: { value: "New Description" },
    });

    fireEvent.submit(screen.getByText("addTodo").closest("form")!);

    expect(mockSubmit).toHaveBeenCalledWith({
      title: "New Todo",
      description: "New Description",
    });
  });

  it("calls onCancel and clears fields when cancel button is clicked", () => {
    const initialData: Todo = {
      id: 1,
      title: "Test Todo",
      description: "Test Description",
    };

    render(
      <TodoForm
        onSubmit={mockSubmit}
        initialData={initialData}
        onCancel={mockCancel}
      />
    );

    fireEvent.click(screen.getByText("cancel"));

    expect(mockCancel).toHaveBeenCalled();

    const titleInput = screen.getByPlaceholderText(
      "todoTitle"
    ) as HTMLInputElement;
    const descriptionInput = screen.getByPlaceholderText(
      "description"
    ) as HTMLTextAreaElement;

    expect(titleInput.value).toBe("");
    expect(descriptionInput.value).toBe("");
  });

  it("does not submit when title is empty", () => {
    render(<TodoForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByPlaceholderText("todoTitle"), {
      target: { value: "" },
    });

    fireEvent.submit(screen.getByText("addTodo").closest("form")!);

    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
