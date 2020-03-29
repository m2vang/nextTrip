import React, { Component } from 'react';
import {connect} from 'react-redux';
import { clearBusRouteData, clearDeparturesData, clearStopsData, clearDirectionData } from '../redux/actions';
import Header from './Header';
import RouteProcessSteppers from './routePicker/RouteProcessStepper';
// material-ui
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
// material-ui/styles
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import withStyles from "@material-ui/core/styles/withStyles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inRoute: false,
            inStop: false,
            chosen: false,
            boxAlignment: 'inline-flex'
        };
    }

    inRouteSelection = () => {
        this.setState({inRoute: true, inStop: false, chosen: true, boxAlignment: ''});
    };

    inStopSelection = () => {
        this.setState({inRoute: false, inStop: true, chosen: true, boxAlignment: ''});
    };

    handleRestart = () => {
        this.setState({inRoute: false, inStop: false, chosen: false, boxAlignment: 'inline-flex'});
        this.props.clearBusRouteData();
        this.props.clearDirectionData();
        this.props.clearStopsData();
        this.props.clearDeparturesData();
    };

    getBtnContainerStyling = () => {
        return ({
            display: this.state.boxAlignment,
            flexDirection: 'column'
        })
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
                            <Box style={this.getBtnContainerStyling()}>
                                <Button variant="contained" color={this.state.inRoute ? "primary" : "default"} style={styles.button} onClick={this.inRouteSelection}>
                                    Route
                                </Button>
                                <Button variant="contained" color={this.state.inStop ? "primary" : "default"} style={styles.button} onClick={this.inStopSelection}>
                                    Stop Number
                                </Button>
                            </Box>
                            {this.state.inRoute ? <RouteProcessSteppers restart={this.handleRestart}/> : <div/>}
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
    button: {
        fontWeight: 'bolder',
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    title: {
        fontSize: '22px',
        marginBottom: theme.spacing(1),
    }
};
const mapStateToProps = () => {};
export default connect(mapStateToProps, { clearBusRouteData, clearDirectionData, clearStopsData, clearDeparturesData })(withStyles(styles)(App));
