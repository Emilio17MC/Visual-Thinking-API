const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "Welcome to Visual Thinking API"});
});

app.get("/v1/students", (req, res) => {
    const students = StudentController.getAllStudents();

    res.json(students);
});

app.listen(port, () => {
    console.log(`Visual Thinking API running in localhost:${port}`);
});