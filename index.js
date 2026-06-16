// src/config.js
import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;

export const DB_CONFIG = {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'base2026',  // ← ¡Aquí debe estar!
    port: process.env.MYSQL_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

export default DB_CONFIG;
