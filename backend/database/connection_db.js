import {Sequelize} from "sequelize";
import { DB_NAME, DB_PASSWORD, DB_USER } from "../config.js";

const connection_db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

export default connection_db;