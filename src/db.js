import { createPool } from 'mysql2/promise';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } from './config.js';

console.log('💻 Conectando a MySQL LOCAL');

const poolConfig = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
    waitForConnections: true,
    connectionLimit: 10
};

export const conmysql = createPool(poolConfig);