const express = require('express');
const fetch = require('node-fetch');
const request = require("request");
const bp = require("body-parser")
const app = express();
//var drinkTypes = require('./index.js');
var drinkIngredients = require('./indexi.js');

app.use(bp())
//const configz = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
const PORT = 9000;


// convert data to array
// var result = [];
// for (let i =0; i < 20; i++) {
//     result.push(drinkIngredients.drinks[i]);
// }

//var j = Object.values(drinkIngredients.drinks)

// let wholeArray = Object.keys(drinkIngredients).map(key => drinkIngredients[key]);

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
app.get('/api/test', (request, response) => {
    response.status(200).send(drinkIngredients)
})

app.listen(PORT, () => console.log(`server is up at port ${PORT}`))