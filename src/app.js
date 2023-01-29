import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.send("OK");
});

app.get("/task", (req, res) => { });
app.post("/task", (req, res) => { });
app.put("/task/:id", (req, res) => { });
app.delete("/task/:id", (req, res) => { });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
