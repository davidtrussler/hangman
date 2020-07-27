import React from 'react';
import Adapter from 'enzyme-adapter-react-16'; 
import Enzyme, {shallow} from 'enzyme'; 
import { MainGame } from '../components/MainGame'; 

Enzyme.configure({adapter: new Adapter()}); 

describe('MainGame component', () => {
	let wrapper; 

	beforeEach(() => {
		wrapper = shallow(<MainGame/>); 
	}); 

	test('Checks the states are set correctly on load', () => {
		const playingState = wrapper.state('playing'); 
		
		expect(playingState).toBe('inactive'); 
	}); 
}); 
