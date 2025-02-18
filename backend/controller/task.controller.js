import { Task } from "../model/task.model.js";

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updatedData = {
      title,
      description,
      completed,
    };
    const updatedTask = await Task.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(400).json({
        message: "No Updated task",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Task Updated",
      updatedTask,
      success: false,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Task not updated",
      success: false,
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    if (!title || !description || !completed) {
      return res.status(400).json({
        message: "All field required",
        success: false,
      });
    }
    await Task.create({
      title,
      description,
      completed,
    });
    return res.status(200).json({
      message: "Task Added",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Task not created",
      success: false,
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Task Deleted",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Task not deleted",
      success: false,
    });
  }
};
