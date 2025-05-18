import { Router } from "express";
import { addNewTask, getAllTasks } from "../controllers/task.controller.js";


const router = Router();

router.get('/', getAllTasks);
router.post('/', addNewTask);


export default router;