const express = require("express");
const taskModel = require("./model/task.model");

const app = express();

app.use(express.json());


app.post("/tasks", async (req, res) => {

    const data = req.body;

    await taskModel.create({
        title: data.title,
        description: data.description
    });

    res.status(201).json({
        message: "Task created successfully"
    });

});


app.get("/tasks", async (req, res) => {

    const tasks = await taskModel.find();

    res.status(200).json({
        message: "Tasks fetched successfully",
        tasks: tasks
    });

});

app.delete("/tasks/:id", async (req, res) => {

    const id = req.params.id;

    await taskModel.findOneAndDelete({
        _id: id
    });

    res.status(200).json({
        message: "Task deleted successfully"
    });

});


module.exports = app;