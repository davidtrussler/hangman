import React, { Component } from 'react';

export class Main_game extends Component {
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
			playing: 'active'
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
