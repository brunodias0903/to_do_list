import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '@/components/TodoItem';
import { Todo } from '@/types/todo';

describe('TodoItem Component', () => {
  const mockTodo: Todo = {
    id: 1,
    title: 'Test Todo',
    description: 'Test Description',
    completed: false
  };

  const mockToggle = vi.fn();
  const mockDelete = vi.fn();
  const mockEdit = vi.fn();

  it('renders todo item correctly', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
        onEdit={mockEdit} 
      />
    );

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('calls onToggle when checkbox is clicked', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
        onEdit={mockEdit} 
      />
    );

    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  it('calls onEdit when edit button is clicked', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
        onEdit={mockEdit} 
      />
    );

    fireEvent.click(screen.getByText('Edit'));
    expect(mockEdit).toHaveBeenCalledWith(mockTodo);
  });

  it('calls onDelete when delete button is clicked', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
        onEdit={mockEdit} 
      />
    );

    fireEvent.click(screen.getByText('Delete'));
    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  it('applies completed style when todo is completed', () => {
    const completedTodo = { ...mockTodo, completed: true };
    
    render(
      <TodoItem 
        todo={completedTodo} 
        onToggle={mockToggle} 
        onDelete={mockDelete} 
        onEdit={mockEdit} 
      />
    );

    expect(screen.getByText('Test Todo')).toHaveClass('completed');
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});