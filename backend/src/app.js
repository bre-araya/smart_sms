const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dashboardRoutes = require('./routes/dashboard.routes');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "School Management API Running",
    version: "1.0.0",
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use('/api', dashboardRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: "Internal server error",
    error: err.message,
  });
});

module.exports = app;