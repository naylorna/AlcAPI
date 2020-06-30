var request = require("request");

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
  // console.log(body);
	exports.drinkTypes = body;
});