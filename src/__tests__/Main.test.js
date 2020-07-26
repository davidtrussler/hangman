import React from 'react';
import Adapter from 'enzyme-adapter-react-16'; 
import Enzyme, {shallow, mount} from 'enzyme'; 
import { Main } from '../components/Main'; 

Enzyme.configure({adapter: new Adapter()}); 

it('Does nothing', () => {
	const wrapper = shallow(<Main/>); 
	const valCount = wrapper.find('p').length; 

	expect(valCount).toBe(4); 
}); 
