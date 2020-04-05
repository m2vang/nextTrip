import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from "../components/PageNotFound";
import {Typography} from "@material-ui/core";

describe('<PageNotFound />', () => {
	it('renders two <Typography /> components', () => {
		const wrapper = shallow(<PageNotFound />);
		expect(wrapper.find(Typography)).toHaveLength(2);
	})
})