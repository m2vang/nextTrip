import React, { Component } from 'react';
import {connect} from 'react-redux';
import { storeBusRoute,
	storeRouteData,
	storeSelectedDirection,
	storeSelectedStop,
	clearBusRouteData,
	clearDirectionData,
	clearStopsData,
	clearDeparturesData
} from '../redux/actions';
import Header from './Header';
import RouteProcessSteppers from './routePicker/RouteProcessStepper';
// material-ui
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
// material-ui/styles
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import withStyles from "@material-ui/core/styles/withStyles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inRoute: true,
			busIcon: true,
			directionIcon: false,
			stopIcon: false,
			activeStep: 0,
		};
	}

	handleBackClick = () => {
		this.setState({activeStep: this.state.activeStep - 1});
	};

	handleRouteSelection = (routeChosen) => {
		this.props.storeBusRoute(routeChosen);
		this.setState({busIcon: false, directionIcon: true, stopIcon: false, activeStep: 1});
	};

	handleDirectionSelection = (directionChosen) => {
		this.props.storeSelectedDirection(directionChosen);
		this.setState({busIcon: false, directionIcon: false, stopIcon: true, activeStep: 2});
	};

	handleStopsSelection = (stopChosen) => {
		this.props.storeSelectedStop(stopChosen);
		this.setState({busIcon: false, directionIcon: false, stopIcon: false, activeStep: 3});
	};

	//restart() resets inRoute state back to false first before switching it to true to restart the process
	restart = () => {
		this.setState({inRoute: false, setActiveStep: 0}, () => this.handleRestartRoute());
	};

	handleRestartRoute = () => {
		this.setState({inRoute: true, busIcon: true, directionIcon: false, stopIcon: false});
		this.props.clearBusRouteData();
		this.props.clearDirectionData();
		this.props.clearStopsData();
		this.props.clearDeparturesData();
	};

	render() {
		return (
				<div style={styles.app}>
					<Grid container spacing={3}>
						<ThemeProvider theme={theme}>
							<Grid item xs={12}>
								<Header/>
								<Typography variant="h4" style={styles.title}>Minneapolis Metro Transit Bus Line</Typography>
								<Typography variant="h5" style={styles.title}>Find Real Time Departures By: </Typography>
								{this.state.inRoute ?
									<RouteProcessSteppers
										restart={this.restart}
										handleBackClick={this.handleBackClick}
										handleRouteSelection={this.handleRouteSelection}
										handleDirectionSelection={this.handleDirectionSelection}
										handleStopsSelection={this.handleStopsSelection}
										busIcon={this.state.busIcon}
										directionIcon={this.state.directionIcon}
										stopIcon={this.state.stopIcon}
									/> : null}
							</Grid>
						</ThemeProvider>
					</Grid>
				</div>
		);
	}
}

const styles = {
	app: {
		textAlign: 'center',
		height: '100vh',
	},
	title: {
		fontSize: '22px',
		marginBottom: theme.spacing(1),
	}
};
const mapStateToProps = ({ bReducer, dReducer, sReducer}) => {
	const { busRoute } = bReducer;
	const { selectedDirection } = dReducer;
	const { selectedStop } = sReducer;
	return { busRoute, selectedDirection, selectedStop };
};
export default connect(mapStateToProps, { storeBusRoute, storeRouteData, storeSelectedDirection, storeSelectedStop, clearBusRouteData, clearDirectionData, clearStopsData, clearDeparturesData })(withStyles(styles)(MainPage));
