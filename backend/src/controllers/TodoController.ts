import { Request, Response } from 'express';
import TodoModel, { Todo } from '@/models/Todo';

export class TodoController {
  async getAllTodos(req: Request, res: Response): Promise<void> {
    try {
      const todos = await TodoModel.findAll();
      res.status(200).json(todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
      res.status(500).json({ error: 'Failed to fetch todos' });
    }
  }

  async getTodoById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const todo = await TodoModel.findById(id);
      
      if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
      
      res.status(200).json(todo);
    } catch (error) {
      console.error('Error fetching todo:', error);
      res.status(500).json({ error: 'Failed to fetch todo' });
    }
  }

  async createTodo(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, completed } = req.body;
      
      if (!title) {
        res.status(400).json({ error: 'Title is required' });
        return;
      }
      
      const newTodo: Todo = {
        title,
        description,
        completed: completed || false
      };
      
      const todo = await TodoModel.create(newTodo);
      res.status(201).json(todo);
    } catch (error) {
      console.error('Error creating todo:', error);
      res.status(500).json({ error: 'Failed to create todo' });
    }
  }

  async updateTodo(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const { title, description, completed } = req.body;
      
      const todo = await TodoModel.findById(id);
      if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
      
      await TodoModel.update(id, { title, description, completed });
      
      const updatedTodo = await TodoModel.findById(id);
      res.status(200).json(updatedTodo);
    } catch (error) {
      console.error('Error updating todo:', error);
      res.status(500).json({ error: 'Failed to update todo' });
    }
  }

  async deleteTodo(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      
      const todo = await TodoModel.findById(id);
      if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }
      
      await TodoModel.delete(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting todo:', error);
      res.status(500).json({ error: 'Failed to delete todo' });
    }
  }
}

export default new TodoController();