import connection_db from "./database/connection_db.js";
import express from "express";
import TaskRouter from "./routes/TaskRouter.js";
import { NODE_ENV, PORT } from "./config.js";
import chalk from "chalk";
import cors from "cors"
import TaskModel from "./models/TaskModel.js";

try {
  await connection_db.authenticate();
  console.log(chalk(`✅ Connection has been established successfully.\n`));
} catch (error) {
  console.error('❌ Unable to connect to the database:', error);
}

try {
  await TaskModel.sync(); //await TaskModel.sync({force: true}); // Elimina el modelo anterior y crea uno nuevo
  console.log(chalk('✅ Model and database synchronized correctly\n'));
} catch (error) {
  console.error('❌ Synchronization error:', error);
}

export const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", TaskRouter);

if (NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log([
      chalk.bold(`Server started on PORT: ${PORT}`),
      chalk.bgMagenta(`http://localhost:${PORT}/api`),
      chalk.gray('Press CTRL-C to stop'),
    ].join('\n'));
  });
}
