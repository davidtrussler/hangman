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

	renderControls = () => {
		switch (this.state.playing) {
			case 'active': 
				return 'game is active!'; 
				break; 
			case 'complete': 
				return 'game is over!'; 
				break; 
			default: 
				return (
					<button
						className="btn btn--start"
						onClick={ this.handleClick }
					>
						Start the game
					</button>
				)
		}
	}

	render() {
		return (
			<section className="game">
				<div className="img-container img-container--figure"></div>
				{this.renderControls()}
			</section>
		)
	}
}
