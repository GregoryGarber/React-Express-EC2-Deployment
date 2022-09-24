import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import * as path from 'path'
import dotenv  from "dotenv"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 5000


app.get('/test', (req, res) => {
    res.json({data: "this is data from the server"});
  });


  // Serve static files
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "client/build", "build", "index.html"));
  });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});