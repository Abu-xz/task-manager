import { Router } from "express";
import {
  addNewTask,
  getAllTasks,
  toggleUpdateStatus,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/", getAllTasks);
router.post("/", addNewTask);
router.patch("/:taskId/toggle-update-status", toggleUpdateStatus);

export default router;
