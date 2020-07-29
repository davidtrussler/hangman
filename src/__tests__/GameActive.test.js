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

	test('Checks the hidden word is correctly rendered on load', () => {
		wrapper.setState({word: 'test'});

		expect(wrapper.find('.t-word').html()).toBe(
			'<p class="t-word"><span>_</span><span>_</span><span>_</span><span>_</span></p>'
		);
	}); 

	test('Checks the hidden word is correctly rendered on user correct guess', () => {
		wrapper.setState({
			word: 'test', 
			hit: ['t']
		});

		// TODO make this work!
		// expect(wrapper.find('.t-word').html()).toBe(
		// 	'<p class="t-word"><span>t</span><span>_</span><span>_</span><span>t</span></p>'
		// );
	}); 
}); 
