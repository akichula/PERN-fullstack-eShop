require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const models = require('./models/models');
const router = require('./routes/index')ж
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 7000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

//err handler, last Middleware
app.use(errorHandler)

app.get(
    ('/'),
    ((req, res) =>
    res.status(200).json({message: 'It is working!!!'}))
)

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

