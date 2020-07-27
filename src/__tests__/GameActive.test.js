import React from 'react';
import Adapter from 'enzyme-adapter-react-16'; 
import Enzyme, { shallow } from 'enzyme'; 
import { GameActive } from '../components/GameActive'; 
import { Library } from '../components/Library'; 

Enzyme.configure({adapter: new Adapter()}); 

describe('GameActive component', () => {
	let wrapper; 

	beforeEach(() => {
		wrapper = shallow(<GameActive/>); 
	}); 

	test('Checks the `hits`, `misses` and `word` states are set correctly on load', () => {
		const hitsState = wrapper.state('hits'); 
		const missesState = wrapper.state('misses'); 
		const wordState = wrapper.state('word'); 
		
		expect(hitsState.length).toBe(0); 
		expect(missesState.length).toBe(0); 
		expect(Library.indexOf(wordState)).toBeGreaterThanOrEqual(0);
	}); 
}); 
