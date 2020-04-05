import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

describe('<App />', () => {
  it('renders a <Router /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Router)).toHaveLength(1);
  });

  it('renders a <Route /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Route)).toHaveLength(2);
  });
});
