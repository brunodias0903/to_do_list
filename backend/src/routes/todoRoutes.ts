import { Router } from "express";
import TodoController from "@/controllers/TodoController";

const router = Router();

router.get("/", TodoController.getAllTodos.bind(TodoController));
router.get("/:id", TodoController.getTodoById.bind(TodoController));
router.post("/", TodoController.createTodo.bind(TodoController));
router.put("/:id", TodoController.updateTodo.bind(TodoController));
router.delete("/:id", TodoController.deleteTodo.bind(TodoController));

export default router;