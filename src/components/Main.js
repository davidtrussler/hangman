import React from 'react';

export function Main() {
	return (
		<main>
			<div className="constrained">
				<div className="main__inner">
					<p>This is a web app version of the paper and pencil guessing game. The app thinks of a word, your task is to guess it by suggesting letters, one at a time.</p>

					<p>If you guess a correct letter it will show below in its correct position. If your suggested letter does not occur in the word, the app draws one element of a hanged man stick figure.</p>

					<p>Guessing the mystery word before the hanged man is complete means you are the winner. If the figure is completed without the word being guessed you have lost.</p>

					<p>To begin click &#8220;Start the game&#8221;. Good luck!</p>

					<div className="img-container"></div>

					<button>Start the game</button>
				</div>
			</div>
		</main>
	)
}
