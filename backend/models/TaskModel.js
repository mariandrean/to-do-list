import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

const TaskModel = connection_db.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    is_done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }
}, { // Opciones adicionales del modelo
    tableName: 'tasks', // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar los campos createdAt y updatedAt
});

export default TaskModel;