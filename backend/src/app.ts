import express, { Application } from 'express';
import cors from 'cors';
import routes from '@/routes';
import database from '@/database/database';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.initializeDatabase();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors({
      origin: 'http://localhost:5173', // Vite default port
      credentials: true
    }));
  }

  private routes(): void {
    this.app.use('/api', routes);
  }

  private async initializeDatabase(): Promise<void> {
    try {
      await database.connect();
    } catch (error) {
      console.error('Failed to initialize database:', error);
      process.exit(1);
    }
  }
}

export default new App().app;