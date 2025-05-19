import { Router } from "express";
import { addNewTask, getAllTasks, updateTaskCompleted } from "../controllers/task.controller.js";


const router = Router();

router.get('/', getAllTasks);
router.post('/', addNewTask);
router.patch('/:taskId/toggle-completed', updateTaskCompleted);

export default router;