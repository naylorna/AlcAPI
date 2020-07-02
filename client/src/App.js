import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			drinks: [],
			searchValue: '',
			addInput: '',
			response: 'Search again sorry'
		}
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}
	
	// Sets search value
	handleOnChange = event => {
			this.setState({ searchValue: event.target.value });
	};

	handleSearch = event => {
		//this.componentDidMount();
		if(this.state.drinks === this.state.searchValue) {
				this.setState({response : 'Yes we have it'})
				this.setState({ addInput: this.state.drinks})
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
		.then(data => {this.setState({ drinks: data.drinkIngredients.strIngredient1})})
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
				<button>Add to Coctail</button>
        		</div>
			<div id="recipe">
				<p>Coctail Recipe:</p>
			</div>
			</div>
		)
	}
}


export default App;
