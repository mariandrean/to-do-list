import { PORT } from "./config.js";
import connection_db from "./database/connection_db.js";
import express from "express";
import TaskRouter from "./routes/TaskRouter.js";
import TaskModel from "./models/TaskModel.js";
import chalk from "chalk";

try {
  await connection_db.authenticate();
  console.log(chalk.green(`✅ Connection has been established successfully.\n`));
} catch (error) {
  console.error('❌ Unable to connect to the database:', error);
}

// Sincronizar el modelo con la base de datos
try {
  await TaskModel.sync();
  //await TaskModel.sync({force: true}); // Elimina el modelo anterior y crea uno nuevo
  console.log(chalk.green('✅ Model and database synchronized correctly\n'));
} catch (error) {
  console.error('❌ Synchronization error:', error);
}


const app = express();
app.use(express.json());
app.use("/api", TaskRouter);

app.listen(PORT, () => {
  console.log([
    chalk.bold.underline(`Server started on PORT: ${PORT}`),
    chalk.bgMagenta(`➜  http://localhost:${PORT}/api`),
    chalk.gray('Press CTRL-C to stop'),
  ].join('\n'));
});