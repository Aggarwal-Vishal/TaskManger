import express from "express";
import {
  createTask,
  deleteTask,
  updateTask,
} from "../controller/task.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTask);
router.route("/update/:id").put(isAuthenticated, updateTask);
router.route("/delete/:id").delete(isAuthenticated, deleteTask);

export default router;
