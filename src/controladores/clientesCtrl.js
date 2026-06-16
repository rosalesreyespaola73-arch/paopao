// src/controladores/clientesCtrl.js
import db from '../db.js';  // ← Importación por defecto

export const getClientes = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM clientes');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
