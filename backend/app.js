import { PORT } from "./config.js";
import connection_db from "./database/connection_db.js";
import express from "express";
import TaskRouter from "./routes/TaskRouter.js";
import TaskModel from "./models/TaskModel.js";

try {
  await connection_db.authenticate();
  console.log(`✅ Connection has been established successfully.`);
} catch (error) {
  console.error('❌ Unable to connect to the database:', error);
}

// Sincronizar el modelo con la base de datos
(async () => {
  try {
    await TaskModel.sync();
    //await TaskModel.sync({force: true}); // Elimina el modelo anterior y crea uno nuevo
    console.log('✅ Model and database synchronized correctly');
  } catch (error) {
    console.error('❌ Synchronization error:', error);
  }
})();

const app = express();
app.use("/api", TaskRouter)

app.listen(PORT, () => {
  console.log(`➡️  Server up in http://localhost:${PORT}/api`);
});