import React from 'react';
import Adapter from 'enzyme-adapter-react-16'; 
import Enzyme, {shallow, mount} from 'enzyme'; 
import { MainGame } from '../components/MainGame'; 

Enzyme.configure({adapter: new Adapter()}); 

describe('MainGame component', () => {
	let wrapper; 

	beforeEach(() => {
		wrapper = mount(<MainGame/>); 
	}); 

	test('Checks the `active` state is set correctly on load', () => {
		const playingState = wrapper.state('playing'); 
		
		expect(playingState).toBe('inactive'); 
	}); 

	test('Checks the `active` state is updated correctly when `Start game` is clicked', () => {
		const btn = wrapper.find('.btn--start'); 
				
		btn.simulate('click'); 

		let playingState = wrapper.state('playing'); 		
		expect(playingState).toBe('active'); 
	}); 
}); 
