const  express = require("express");
const app = express();

// Allow JSON request bodies
app.use(express.json());

// ✅ Allow connections from any host
app.listen(3000,() => {
  console.log("🚀 Server running on port 3000");
});

// Demo route: /
app.get("/", (req, res) => {
  res.send("Welcome to Express Demo App running on VM 🚀");
});

// Demo route: /tasks
app.get("/tasks", (req, res) => {
  const tasks = [
    { id: 1, title: "Setup VM", status: "completed" },
    { id: 2, title: "Deploy Express App", status: "in-progress" },
    { id: 3, title: "Access via Public IP", status: "pending" }
  ];
  res.json(tasks);
});
