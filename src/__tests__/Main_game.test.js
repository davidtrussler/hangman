import React from 'react';
import Adapter from 'enzyme-adapter-react-16'; 
import Enzyme, {shallow, mount} from 'enzyme'; 
import { Main_game } from '../components/Main_game'; 

Enzyme.configure({adapter: new Adapter()}); 

describe('Main_game component', () => {
	let wrapper; 

	beforeEach(() => {
		wrapper = shallow(<Main_game/>); 
	}); 

	test('Checks the states are set correctly on load', () => {
		const playingState = wrapper.state('playing'); 
		const hitsState = wrapper.state('hits'); 
		const missesState = wrapper.state('misses'); 
		const wordState = wrapper.state('word'); 
		
		expect(playingState).toBe('inactive'); 
		expect(hitsState.length).toBe(0); 
		expect(missesState.length).toBe(0); 
		expect(wordState).toBe(''); 
	}); 

	test('Checks the states are updated correctly when `Start game` button is clicked', () => {
		const startBtn = wrapper.find('button'); 
		
		startBtn.simulate('click'); 

		const playingState = wrapper.state('playing'); 
		const hitsState = wrapper.state('hits'); 
		const missesState = wrapper.state('misses'); 
		const wordState = wrapper.state('word'); 

		expect(playingState).toBe('active'); 
		expect(hitsState.length).toBe(0);
		expect(missesState.length).toBe(0);
		expect(wordState).toBe('');
	}); 
}); 
