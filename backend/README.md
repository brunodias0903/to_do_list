# Todo List Backend

A Node.js backend for a Todo List application built with TypeScript, Express, and SQLite using MVC architecture.

## Project Structure

```
src/
├── controllers/     # Handle HTTP requests and responses
├── database/        # Database configuration and connection
├── models/          # Data models and database operations
├── routes/          # API route definitions
├── services/        # Business logic (if needed)
├── app.ts           # Express application setup
└── server.ts        # Server entry point
```

## Setup Instructions

1. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn
   ```

2. Start development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

3. Build for production:

   ```
   npm run build
   ```

   or

   ```
   yarn build
   ```

4. Start production server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

## API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo
- `GET /api/health` - Health check endpoint

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3000
NODE_ENV=development
```
