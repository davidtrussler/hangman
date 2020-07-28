import React, { Component } from 'react';
import { Library } from './Library'; 

export class GameActive extends Component {
	constructor() {
		super(); 

		this.state = {
			hits: [], 
			misses: [], 
			word: Library[Math.floor(Math.random() * Library.length)], 
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="game__field">
					<h2>Word</h2>
					<p>letters</p>
				</div>

				<div className="game__field">
					<h2>Guess</h2>
					<form>
						<input type="text"/>
						<button>Enter</button>
					</form>
				</div>

				<div className="game__field">
					<h2>Misses</h2>
					<p></p>
				</div>
			</React.Fragment>
		)
	}
}