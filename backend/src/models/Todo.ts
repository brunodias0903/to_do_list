import database from '@/database/database';

export interface Todo {
  id?: number;
  title: string;
  description?: string;
  completed?: boolean;
  created_at?: string;
}

export class TodoModel {
  async findAll(): Promise<Todo[]> {
    const db = database.getDb();
    return await db.all('SELECT * FROM todos ORDER BY created_at DESC');
  }

  async findById(id: number): Promise<Todo | undefined> {
    const db = database.getDb();
    return await db.get('SELECT * FROM todos WHERE id = ?', id);
  }

  async create(todo: Todo): Promise<Todo> {
    const db = database.getDb();
    const { title, description, completed } = todo;
    
    const result = await db.run(
      'INSERT INTO todos (title, description, completed) VALUES (?, ?, ?)',
      [title, description || null, completed || false]
    );
    
    return {
      id: result.lastID,
      title,
      description,
      completed: completed || false
    };
  }

  async update(id: number, todo: Partial<Todo>): Promise<void> {
    const db = database.getDb();
    const { title, description, completed } = todo;
    
    await db.run(
      'UPDATE todos SET title = COALESCE(?, title), description = COALESCE(?, description), completed = COALESCE(?, completed) WHERE id = ?',
      [title, description, completed, id]
    );
  }

  async delete(id: number): Promise<void> {
    const db = database.getDb();
    await db.run('DELETE FROM todos WHERE id = ?', id);
  }
}

export default new TodoModel();