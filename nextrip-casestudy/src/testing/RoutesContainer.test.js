import React from 'react';
import { shallow } from 'enzyme';
import RoutesContainer from "../components/routePicker/RoutesContainer";
import TableContainer from "@material-ui/core/TableContainer";

describe('<RoutesContainer/>', () => {
	it('renders a <TableContainer /> components', () => {
		const wrapper = shallow(<RoutesContainer />);
		expect(wrapper.find(TableContainer)).toHaveLength(1);
	});
});