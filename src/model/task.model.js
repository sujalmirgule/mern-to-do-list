const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,

    completed: {
        type: Boolean,
        default: false
    }
});

const taskModel = mongoose.model("tasks", taskSchema);

module.exports = taskModel;