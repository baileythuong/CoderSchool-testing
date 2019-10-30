import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders an h1', () => {
  const wrapper = shallow(<App />)
  expect (wrapper.contains(<h1>Increment App</h1>)).toBe(true)
});

it("check if button is clicked", () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find(".increment");
  button.simulate("click");
  wrapper.update();
  expect(wrapper.find("h2").text()).toEqual("2");
});