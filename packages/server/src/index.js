const express = require('express');
const routes = require('./routers/mainRouters');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/personaJournalDB', {useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex':true});


app.use(routes);

app.listen(3333, () => {

    console.log('server on');

})