# Hangman

## A simple app based on the eponymous word game, traditionally played with pencil and paper

### Set up

- Clone this repo with `git clone https://github.com/davidtrussler/hangman.git`
- Change location to this repo with `cd hangman`
- Install all necessary packages with `npm install`
- Runs the app in development mode with `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Steps to build the app

#### Done [X] ToDo []

- Set up basic react app [X]

- Strip out the unnecessary files, update README and add any required basic assets (e.g. favicon) [X]

- Create basic components (markup) for initial state [X]

- Set up SASS [X]

- Add styles for initial state [X]

- Set up Jest [X]

- Add game logic: 
	- Set initial state: 
		- playing: `inactive` [X]
	- Set game active states 
		- hits: empty array [X]
		- misses: empty array [X]
		- word: random word [X]
	- Change states based on user input:
		- playing: 
			- `active` on `Start game` [X]
			- `complete` on either 
				- hits = letters.length []
				- game level: levels.length []
		- hits: update array on each guess []
		- misses: update array on each guess []
		- word: update to random value on `Start game` []

- Update display based on game states: 
	- inactive [X]
  - active []
  - complete []

- Make sprite for main image []

- Replace images with SVG []

- Add breakpoints as variables []
