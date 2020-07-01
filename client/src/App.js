import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
	const [drinkIng, setDrinks] = useState([])
	useEffect(() => {
		fetch("http://localhost:9000/api/drinks", {
			method: "GET",
			headers: {
				"Access-Control-Allow-Origin":true
			}
			}).then(response => {
				if (response.status === 200) return response.json();
      				throw new Error("failed to connect");
			}).then(responseJSON => {
      				setDrinks(drinkdrinkIng => [...drinkIng, responseJSON.drinkIngredients]);
			});}, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lets Drink!</h1>
	  {drinkIng}
      </header>
    </div>
  );
}

export default App;
