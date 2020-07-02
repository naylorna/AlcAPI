import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {i
	constructor(props){
		super(props)
		this.state = {
			drinks: [],
			searchValue: '',
			addInput: '',
			response: '',
			recipe: []
		}
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.addDrink = this.handleSearch.bind(this);
	}
	
	// Sets search value
	handleOnChange = event => {
			this.setState({ searchValue: event.target.value });
	};
	
	// Add drink to recipe
	AddDrink = event => {
		this.setState({ addInput: this.state.drinks})
	}

	handleSearch = event => {
		//this.componentDidMount();
		if(this.state.drinks === this.state.searchValue) {
				this.setState({response : 'Yes we have it'})
		} else {
			this.setState({response: 'Sorry search again'})
		}
	};

	// Reading in the api data
	componentDidMount() {
		fetch('http://localhost:9000/api/drinks', {
			method: 'GET',
			headers: {
    				'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    				'x-rapidapi-key': '4e646a0679msh6adc5431da3ebd5p1321dejsna473e2d5f6ed',
    				useQueryString: true
			  }
		})
		.then(res => res.json())
		.then(data => {this.setState({ drinks: data.drinkIngredients[0].strIngredient1})})
	}
	render() {
		return (
			<div className="App">
			<header className="App-header">
				<h1>Lets Drink</h1>
			</header>
			<div>
				<input name="text" type="text" placeholder="Search Alcohol" 
					onChange={event => this.handleOnChange(event)} value={this.state.searchValue} />
				<button onClick={this.handleSearch}>Search</button>
				<p>{this.state.response}</p>
				<button onClick={this.addDrink}>Add to Coctail</button>
        		</div>
			<div id="recipe">
				<p>Coctail Recipe:</p>
				<p>{this.state.addInput}</p>
			</div>
			</div>
		)
	}
}


export default App;
