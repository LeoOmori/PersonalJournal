const express = require('express');
const routes = require('./routers/mainRouters');

const app = express();

app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/personaJournalDB', {useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex':true});


app.use(routes);

app.get('/',(req,res) => {

    res.json('hello');

});



app.listen(3333, () => {

    console.log('server on');

})