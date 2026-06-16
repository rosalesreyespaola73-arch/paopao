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

console.log('✅ Cargando middlewares y rutas...');

app.use(express.json());

// ✅ RUTA DE PRUEBA: Para confirmar que la API está viva desde el navegador
app.get('/', (req, res) => {
    res.json({
        mensaje: "¡API de PAOPAO funcionando correctamente!",
        estado: "Online",
        nota: "El frontend (HTML) es independiente y debe consumir estos endpoints."
    });
});

// Rutas
app.use('/api', clientesRouter)  

// Manejador 404
app.use((req, res, next) => {
    console.log(`⚠️ 404 en: ${req.method} ${req.url}`);
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app
