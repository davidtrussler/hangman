import React, { Component } from 'react';
import { Library } from './Library'; 

export class GameActive extends Component {
	constructor() {
		super(); 

		this.state = {
			hits: [], 
			misses: [], 
			word: Library[Math.floor(Math.random() * Library.length)]
		}
	}

	handleClick = (e) => {
		e.preventDefault(); 

		let value = e.target.previousSibling.value; 

		if (this.state.word.split('').indexOf(value) == -1) {
			let state = this.state.misses.push(value); 

			this.setState({misses: state});
		} else {
			if (this.state.hits.indexOf(value) == -1) {
				let state = this.state.hits.push(value); 

				this.setState({hits: state}); 
			}
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="game__field game__field__word">
					<h2 className="word__heading">Word</h2>
					<p className="t-word">{
						this.state.word.split('').map((letter, key) => {
							if (this.state.hits.indexOf(letter) === -1) {
								return <span key={key}>_</span>;
							} else {
								return <span key={key}>{letter}</span>;
							}
						})
					}</p>
				</div>

				<div className="game__field game__field__guess">
					<h2 className="guess__heading">Guess</h2>
					<form>
						<input 
							className="t-input" 
							type="text" 
							size="1" 
							maxLength="1"
						/>
						<button 
							className="t-btn"
							onClick={ this.handleClick }
						>
							Enter
						</button>
					</form>
				</div>

				<div className="game__field game__field__misses">
					<h2 className="misses__heading">Misses</h2>
					<p></p>
				</div>
			</React.Fragment>
		)
	}
}
