import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { storeBusRoute, storeRouteData, storeSelectedDirection, storeSelectedStop } from '../../redux/actions';
import fetchData from '../Fetch';
import RoutesContainer from './RoutesContainer';
import DirectionsContainer from './DirectionsContainer';
import StopsContainer from './StopsContainer';
import DeparturesContainer from './DeparturesContainer';
import Typography from '@material-ui/core/Typography';

class BusRoute extends Component {
    componentDidMount() {
        this.getBusRoutes();
    };

    getBusRoutes() {
        try {
            fetchData('Routes').then((result) => {
                this.props.storeRouteData(JSON.parse(result));
            })
        } catch (e) {
            console.log('ERROR IN getBusRoutes: ', e);
        }
    };

    render() {
        let title = `${this.props.busRoute.Description ? this.props.busRoute.Description : ''} 
        ${this.props.selectedDirection.Text ? this.props.selectedDirection.Text : ''}
        ${this.props.selectedStop.Text ? this.props.selectedStop.Text : ''}`;

        // ending of title logic
        let endingTitle;
        if (this.props.activeStep === 0) {
            endingTitle = 'Transit Routes';
        } else if (this.props.activeStep === 1) {
            endingTitle = 'Transit Directions';
        } else if (this.props.activeStep === 2) {
            endingTitle = 'Transit Stops';
        } else if (this.props.activeStep === 3) {
            endingTitle = 'Departures';
        }

        return (
            <div>
                <Typography variant="h5" style={window.innerWidth > 768 ? styles.title : styles.titleMobile}>{title}<span> </span>{endingTitle}</Typography>
                {this.props.activeStep === 0 ? <RoutesContainer handleRouteSelection={this.props.handleRouteSelection} handleNext={this.props.handleNext}/> : null}
                {this.props.activeStep === 1 ? <DirectionsContainer handleDirectionSelection={this.props.handleDirectionSelection} handleNext={this.props.handleNext}/> : null}
                {this.props.activeStep === 2 ? <StopsContainer handleStopsSelection={this.props.handleStopsSelection} handleNext={this.props.handleNext}/> : null}
                {this.props.activeStep === 3 ? <DeparturesContainer /> : null}
            </div>
        )
    }

}

const styles = {
    title: {
        marginBottom: '1%'
    },
    titleMobile: {
        width: '80%',
        marginLeft: '10%',
        marginBottom: '5%'
    }
};
const mapStateToProps = ({ bReducer, dReducer, sReducer}) => {
    const { busRoute } = bReducer;
    const { selectedDirection } = dReducer;
    const { selectedStop } = sReducer;
    return { busRoute, selectedDirection, selectedStop };
};
export default connect(mapStateToProps, { storeBusRoute, storeRouteData, storeSelectedDirection, storeSelectedStop })(withStyles(styles)(BusRoute));