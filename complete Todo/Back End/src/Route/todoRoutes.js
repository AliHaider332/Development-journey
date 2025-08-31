const express = require("express");
const { addTodo, deleteTodo, completeTodo } = require("../controlar/todoControllar");
const { getAllTodos } = require("../controlar/todoControllar");

const router = express.Router();

router.post("/", addTodo);
router.get("/", getAllTodos);
router.delete("/:id", deleteTodo);
router.put("/:id/complete", completeTodo);
module.exports = {router};
