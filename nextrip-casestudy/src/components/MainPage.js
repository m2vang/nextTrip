import React, { Component } from 'react';
import {connect} from 'react-redux';
import { clearBusRouteData, clearDeparturesData, clearStopsData, clearDirectionData } from '../redux/actions';
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
		};
	}

	//restart() resets inRoute state back to false first before switching it to true to restart the process
	restart = () => {
		this.setState({inRoute: false }, () => this.handleRestartRoute());
	};

	handleRestartRoute = () => {
		this.setState({inRoute: true });
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
								{this.state.inRoute ? <RouteProcessSteppers restart={this.restart}/> : null}
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
const mapStateToProps = () => {};
export default connect(mapStateToProps, { clearBusRouteData, clearDirectionData, clearStopsData, clearDeparturesData })(withStyles(styles)(MainPage));
