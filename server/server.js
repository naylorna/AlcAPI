const express = require('express');
const fetch = require('node-fetch');
const request = require("request");
const bp = require("body-parser")
const app = express();
var cors = require('cors');

var drinkIngredients = require('./indexi.js');

app.use(cors({
	origin: "http://localhost:3000",
	methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
}));

app.use(bp())
//const configz = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
const PORT = 9000;

app.post('/api/sendalc/:drinks', (request, response) => {

     console.log(request)
     if (request.params.drinks) {
         console.log('request recieved, printing out drink types')
         console.log(request.params.drinks)
        response.status(200).send({message: 'request recieved'});
    }
    else
        res.status(500).send({message: 'error: was expecting a message body'})
 })

 // Shows drink ingredients JSON output
app.get('/api/drinks', (request, response) => {
    response.status(200).send(drinkIngredients)
})

app.listen(PORT, () => console.log(`server is up at port ${PORT}`))
