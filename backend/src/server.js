const app = require("./app");
const { connectDatabase, db } = require("./config/database");

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to PostgreSQL:", error.message);
    await db.end();
    process.exitCode = 1;
  }
}

startServer();