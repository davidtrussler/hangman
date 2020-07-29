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

	showWord = () => {
		console.log('showWord!'); 
		console.log(this.state.word.split('')); 

		let word = ``; 

		this.state.word.split('').map((letter, key) => {
			console.log('letter: ', letter); 
			console.log()

			if (this.state.word.indexOf(letter) > -1) {
				word += `<span key=${key}>${letter}</span>`;
			} else {
				word += `<span key=${key}>_</span>`;
			}
		})

		console.log('word: ', word); 

		return word; 
	}


	render() {
		return (
			<React.Fragment>
				<div className="game__field">
					<h2>Word</h2>
					<p className="t-word">{
						this.state.word.split('').map((letter, key) => {
							if (this.state.hits.indexOf(letter) > -1) {
								return <span key={key}>{letter}</span>;
							} else {
								return <span key={key}>_</span>;
							}
						})
					}</p>
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
