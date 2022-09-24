import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import dotenv  from "dotenv"

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 5000


app.get('/test', (req, res) => {
    res.json({data: "this is data from the server"});
  });


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});