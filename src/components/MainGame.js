import React, { Component } from 'react';
import { GameInactive } from './GameInactive'; 

export class MainGame extends Component {
	constructor() {
		super(); 

		this.state = {
			playing: 'inactive', 
		}
	}

	startGame = (e) => {
		this.setState({
			playing: 'active', 
		})
	}

	renderGame = () => {
		switch (this.state.playing) {
			case 'active': 
				return (
					<p>The game is active!</p>
				)
				break; 
			case 'complete': 
				return (
					<p>The game is over!</p>
				)
				break; 
			default: 
				return (
					<GameInactive
						startCallback = {this.startGame}
					/>
				)
				break; 
			}
	}

	render() {
		return (
			<section className="game">
				<div className="img-container img-container--figure"></div>
				{this.renderGame()}
			</section>
		)
	}
}
