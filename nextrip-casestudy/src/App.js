import React, { Component } from 'react';
import Header from './components/Header';
import CustomizedSteppers from './components/routeStepper/ProcessStepper';
import BusRoutes from './components/BusRoutes';
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

    handleRouteSelection = () => {
        this.setState({inRoute: true, inStop: false, chosen: true, boxAlignment: ''});
    };

    handleStopSelection = () => {
        this.setState({inRoute: false, inStop: true, chosen: true, boxAlignment: ''});
    };

    handleRestart = () => {
        this.setState({inRoute: false, inStop: false, chosen: false, boxAlignment: 'inline-flex'});
    };

    getbtnContainerStyling = () => {
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
                            <Typography variant="h4" style={styles.title}>Minneapolis Metro Transit Bus
                                Line</Typography>
                            <Typography variant="h5" style={styles.title}>Real Time Departures</Typography>
                            <Box style={this.getbtnContainerStyling()}>
                                <Button variant="contained" color="primary" style={styles.button}
                                        onClick={this.handleRouteSelection}>
                                    By Route
                                </Button>
                                <Button variant="contained" color="primary" style={styles.button}
                                        onClick={this.handleStopSelection}>
                                    By Stop Number
                                </Button>
                            </Box>
                            {this.state.inRoute ? <CustomizedSteppers restart={this.handleRestart}/> : <div/>}
                            <BusRoutes/>
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
        marginBottom: theme.spacing(4),
    },
    title: {
        marginBottom: theme.spacing(3),
    }
};

export default withStyles(styles)(App);
