require('dotenv').config()
const express = require('express');
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const cors = require('cors')
const path = require('path')
const errorHandler = require('./middlewares/errorHandlingMiddleware')

const PORT = process.env.PORT || 4000;

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)
app.use('/img', express.static(path.resolve(__dirname, 'static/img')))
app.use(errorHandler)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}, http://localhost:${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
