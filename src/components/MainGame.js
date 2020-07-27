import React, { Component } from 'react';
import { Library } from './Library'; 

export class MainGame extends Component {
	constructor() {
		super(); 

		this.state = {
			playing: 'inactive', 
			hits: [], 
			misses: [], 
			word: ''
		}
	}

	handleClick = (e) => {
		this.setState({
			playing: 'active', 
			word: Library[Math.floor(Math.random() * Library.length)]
		})
	}

	render() {
		return (
			<section className="game">
				<div className="img-container img-container--figure"></div>

				<button
					className="btn btn--start"
					onClick={ this.handleClick }
				>
					Start the game
				</button>
			</section>
		)
	}
}
