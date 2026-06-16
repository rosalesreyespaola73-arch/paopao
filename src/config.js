import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Cargar .env
dotenv.config({ path: path.join(__dirname, '..', '.env') });

console.log('🔍 Configuración cargada:');

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DB_DATABASE || 'base2026';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_PORT = process.env.DB_PORT || 3306;
export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || 'clave_maestra_2026';