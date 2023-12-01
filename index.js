//NOTE - import dotenv
import * as dotenv from 'dotenv';
//NOTE - configurations 
dotenv.config();


import express from 'express'
import { connection } from './database/dbConnection.js';
const app = express()
//NOTE - Middleware
app.use(express.json());

//NOTE - Connect Database
connection()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${process.env.PORT}!`))