// src/db.js
import mysql from 'mysql2/promise';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } from './config.js';

const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

console.log('✅ Conexión a MySQL configurada');
console.log(`📊 Base de datos: ${DB_DATABASE}`);
console.log(`🌐 Host: ${DB_HOST}`);

export default pool;
