# Hangman

## A simple app based on the eponymous word game, traditionally played with pencil and paper

### Prerequisites

Ensure you have the latest versions of the following installed: 
- [node](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Set up

- Clone this repo with `git clone https://github.com/davidtrussler/hangman.git`
- Change location to this repo with `cd hangman`
- Install all necessary packages with `npm install`
- Runs the app in development mode with `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Steps taken to build the app

- [X] Set up basic react app

- [X] Strip out the unnecessary files, update README and add any required basic assets (e.g. favicon)

- [X] Create basic components (markup) for initial state

- [X] Set up SASS

- [X] Add styles for initial state

- [X] Set up Jest

- Add game logic: 
	- Set initial state: 
		- [X] playing: `inactive`
	- Set game active states 
		- [X] hits: empty array
		- [X] misses: empty array
		- [X] word: random word
	- Change states based on user input:
		- playing: 
			- [X] `active` on `Start game`
			- `complete` on either 
				- [ ] hits = letters.length
				- [ ] game level: levels.length
		- [ ] hits: update array on each guess
		- [ ] misses: update array on each guess
		- [X] word: update to random value on `Start game`

- Add/udpate styles based on game states: 
	- [X] inactive
  - [X] active
  - [ ] complete

- [ ] Make sprite for main image

- [ ] Replace images with SVG

- [ ] Add breakpoints as variables
