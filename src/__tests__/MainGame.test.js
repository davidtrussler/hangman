import React from 'react';
import Adapter from 'enzyme-adapter-react-16'; 
import Enzyme, {shallow, mount} from 'enzyme'; 
import { MainGame } from '../components/MainGame'; 
import { Library } from '../components/Library'; 

Enzyme.configure({adapter: new Adapter()}); 

describe('MainGame component', () => {
	let wrapper; 

	beforeEach(() => {
		wrapper = shallow(<MainGame/>); 
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
		expect(Library.indexOf(wordState)).toBeGreaterThanOrEqual(0);
	}); 
}); 
