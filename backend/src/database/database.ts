import { open } from "sqlite";
import sqlite3 from "sqlite3";

export class Database {
  private static instance: Database;
  private db: any;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    try {
      this.db = await open({
        filename: "./todo.db",
        driver: sqlite3.Database,
      });

      await this.db.exec(`
        CREATE TABLE IF NOT EXISTS todos (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          description TEXT,
          completed BOOLEAN DEFAULT 0,
          due_date DATETIME,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      const tableInfo = await this.db.all("PRAGMA table_info(todos)");
      const dueDateExists = tableInfo.some(
        (column: any) => column.name === "due_date"
      );

      if (!dueDateExists) {
        await this.db.exec("ALTER TABLE todos ADD COLUMN due_date DATETIME");
        console.log("Added due_date column to todos table");
      }

      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection error:", error);
      throw error;
    }
  }

  public getDb() {
    return this.db;
  }
}

export default Database.getInstance();
