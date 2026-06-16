import express from 'express'
import cors from 'cors'
import clientesRouter from './routers/clientes.routers.js'

const app = express()

// ✅ CONFIGURACIÓN CORS CORRECTA
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept']
}));

// Middleware adicional para CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(express.json());

// Rutas
app.use('/api', clientesRouter)

// ✅ AGREGAR RUTA RAÍZ - ¡ESTO ES LO QUE FALTA!
app.get('/', (req, res) => {
    res.json({
        message: '🚀 API de Tienda funcionando correctamente',
        status: 'online',
        endpoints: {
            clientes: '/api/clientes',
            productos: '/api/productos',
            pedidos: '/api/pedidos',
            usuarios: '/api/usuarios'
        }
    });
});

// Manejador 404 (debe ir al final)
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    });
});

export default app
})

export default app
