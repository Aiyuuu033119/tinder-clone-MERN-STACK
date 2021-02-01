import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './dbCards.js';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection = 'mongodb+srv://admin:8XF6GvGYaiSUIO1t@cluster0.iv9lu.mongodb.net/tinderdb?retryWrites=true&w=majority';

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('HELLO WORLD'));

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/card', (req, res) => {
    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
});

// Listener
app.listen(port, () => console.log(`listening localhost ${port}`));