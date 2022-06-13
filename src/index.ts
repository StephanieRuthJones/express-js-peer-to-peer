import express, { Application } from 'express'

import productRouter from './routes/product'

const app: Application = express()

/* ROUTES */
app.use('/', productRouter)

/* LISTENING */
const PORT: Number = 4000
app.listen(PORT, (): void => console.log(`running on port ${PORT}`))

export default app
