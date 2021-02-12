import express from 'express'
import './misc/db.js'
import './misc/env.js'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const httpServer = app.listen(process.env.APP_PORT || 3000, () => {
  console.log('Сервер запущен, порт: ' + process.env.APP_PORT || 3000)
})
