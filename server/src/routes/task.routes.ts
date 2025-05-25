import { Router } from "express";
import { TaskController } from "../controllers/task.controller.js";
import { TaskService } from "../services/task.service.js";
import { TaskRepository } from "../repositories/task.repository.js";

const router = Router();

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

router.get("/", taskController.getAllTasks);
router.post("/", taskController.addNewTask);
router.put("/:taskId", taskController.updateTask);
router.patch(
  "/:taskId/toggle-update-status",
  taskController.toggleUpdateStatus
);
router.delete('/:taskId', taskController.removeTask)

export default router;
