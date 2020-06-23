const express = require('express');
const request = require("request");
const app = express();
var obj;

//const configz = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
const PORT = 9000;

var options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/list.php',
  qs: {a: 'list'},
  headers: {
    'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    'x-rapidapi-key': '4e646a0679msh6adc5431da3ebd5p1321dejsna473e2d5f6ed',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);
    obj =body;
	console.log(body);
});

app.post('/api/alc/drinks', (request, response) => {

     console.log(response)
 })

app.get('/api/test', (request, response) => {
    response.status(200).send(obj)
})

app.listen(PORT, () => console.log(`server is up at port ${PORT}`))