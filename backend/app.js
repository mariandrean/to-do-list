import connection_db from "./database/connection_db.js";

try {
    await connection_db.authenticate();
    console.log('✅ Connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }