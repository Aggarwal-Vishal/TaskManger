import express from "express";
import {
  createTask,
  deleteTask,
  getTask,
  updateTask,
} from "../controller/task.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/create").post(createTask);
router.route("/get").get(getTask);
router.route("/update/:id").put(updateTask);
router.route("/delete/:id").delete(deleteTask);

export default router;
