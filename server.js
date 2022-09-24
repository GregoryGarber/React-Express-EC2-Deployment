import express from 'express';
import logger from 'morgan';
import cors from 'cors';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors())


app.get('/test', (req, res) => {
    res.json({data: "this is data from the server"});
  });


app.listen(5000, () => {
    console.log('Listening on 5000');
  });