import { app, server } from '../app';
import request from 'supertest'
import TaskModel from '../models/TaskModel';
import connection_db from '../database/connection_db';

const api = request(app); //simulará los test sobre nuestra aplicación

describe('testing CRUD', () => {
    /* beforeEach(() => {
    }); */
    
    afterAll(async () => {
        await TaskModel.destroy({where: {name: "test"}});
        await connection_db.close();
        server.close();
    });
    
    test('Response body must be an array and show 200 status', async() => {
        const response = await api.get('/api');
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.status).toBe(200);
    });

    test('Response body must not be an array and then show 404 status', async() => {
        const response = await api.get('/holasss');
        expect(Array.isArray(response.body)).toBe(false);
        expect(response.status).toBe(404);
    });

    test('Should create an animal', async() => {
        const response = await api.post('/api').send({
            "name": "test"
        });
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(201); 
    })
})