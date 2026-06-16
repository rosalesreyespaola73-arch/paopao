import { conmysql } from '../db.js';

export const getClientes = async (req, res) => {
    try {
        const [rows] = await conmysql.execute('SELECT * FROM clientes');
        console.log(`📋 Enviando ${rows.length} clientes`);
        res.json(rows);
    } catch (error) {
        console.error('Error en getClientes:', error);
        res.status(500).json({ error: 'Error al obtener clientes: ' + error.message });
    }
};

export const getclientesxid = async (req, res) => {
    try {
        const [rows] = await conmysql.execute('SELECT * FROM clientes WHERE id_cliente = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener cliente' });
    }
};

export const postInsertarCliente = async (req, res) => {
    const { nombre, email, telefono, direccion } = req.body;
    try {
        const [result] = await conmysql.execute(
            'INSERT INTO clientes (nombre, email, telefono, direccion) VALUES (?, ?, ?, ?)',
            [nombre, email, telefono, direccion]
        );
        res.status(201).json({ id_cliente: result.insertId, message: 'Cliente creado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear cliente' });
    }
};

export const putCliente = async (req, res) => {
    const { nombre, email, telefono, direccion } = req.body;
    try {
        const [result] = await conmysql.execute(
            'UPDATE clientes SET nombre=?, email=?, telefono=?, direccion=? WHERE id_cliente=?',
            [nombre, email, telefono, direccion, req.params.id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.json({ message: 'Cliente actualizado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar cliente' });
    }
};

export const patchCliente = async (req, res) => {
    const { nombre, email, telefono, direccion } = req.body;
    try {
        const [result] = await conmysql.execute(
            'UPDATE clientes SET nombre=?, email=?, telefono=?, direccion=? WHERE id_cliente=?',
            [nombre, email, telefono, direccion, req.params.id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.json({ message: 'Cliente actualizado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar cliente' });
    }
};

export const deleteCliente = async (req, res) => {
    try {
        const [result] = await conmysql.execute('DELETE FROM clientes WHERE id_cliente = ?', [req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar cliente' });
    }
};