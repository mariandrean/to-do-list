import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

const TaskModel = connection_db.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { // Opciones adicionales del modelo
    tableName: 'tasks', // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar los campos createdAt y updatedAt
});

// Sincronizar el modelo con la base de datos
(async () => {
    try {
        await TaskModel.sync();
        //await TaskModel.sync({force: true}); // Elimina el modelo anterior y crea uno nuevo
        console.log('Model and database synchronized correctly');
    } catch (error) {
        console.error('Synchronization error:', error);
    }
})();

console.log(TaskModel === connection_db.models.Task); // true