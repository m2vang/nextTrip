import React, { Component } from 'react';
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";

class DirectionsContainer extends Component {
	render() {
		return <div>DIRECTIONS</div>;
	}
}
const styles = {

};
const mapStateToProps = ({bRoute}) => {
	const { routeData, routeTitles } = bRoute;
	return { routeData, routeTitles };
};
export default connect(mapStateToProps, {})(withStyles(styles)(DirectionsContainer));