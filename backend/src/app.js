import express from 'express'
import morgan from 'morgan'
const app =express();

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.json({
        autor:"santiago canal",
        descripcion:"probando base de datos mongo con rutas controladas"
    })
})
export default app