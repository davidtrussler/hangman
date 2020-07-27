import React, { Component } from 'react';
import { GameInactive } from './GameInactive'; 
import { GameActive } from './GameActive'; 

export class MainGame extends Component {
	constructor() {
		super(); 

		this.state = {
			playing: 'inactive', 
		}
	}

	startGame = () => {
		this.setState({
			playing: 'active'
		})
	}

	renderGame = () => {
		switch (this.state.playing) {
			case 'active': 
				return (
					<GameActive/>
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
