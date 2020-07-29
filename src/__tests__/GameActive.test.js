import React from 'react';
import Adapter from 'enzyme-adapter-react-16'; 
import Enzyme, { shallow, mount } from 'enzyme'; 
import { GameActive } from '../components/GameActive'; 
import { Library } from '../components/Library'; 

Enzyme.configure({adapter: new Adapter()}); 

describe('GameActive component', () => {
	let wrapper; 

	beforeEach(() => {
		wrapper = mount(<GameActive/>); 
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

		expect(wrapper.find('.t-word').html()).toBe(
			'<p class="t-word"><span>t</span><span>_</span><span>_</span><span>t</span></p>'
		);
	}); 

	test('Checks the hits state is updated on user interaction', () => {
		let input = wrapper.find('.t-input'); 
		let btn = wrapper.find('.t-btn'); 

		wrapper.setState({
			word: 'test'
		});

		input.instance().value = 't'; 
		btn.simulate('click'); 

		expect(wrapper.state('hits').length).toBe(1); 
		expect(wrapper.state('hits').indexOf('t')).toBe(0); 
		expect(wrapper.state('misses').length).toBe(0); 

		input.instance().value = 'd'; 
		btn.simulate('click'); 

		expect(wrapper.state('hits').length).toBe(1); 
		expect(wrapper.state('misses').length).toBe(1); 
		expect(wrapper.state('misses').indexOf('d')).toBe(0); 
	}); 
}); 
