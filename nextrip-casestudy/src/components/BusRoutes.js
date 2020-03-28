import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeBusRoute, storeRouteData, storeSelectedDirection } from '../redux/actions/index';
import fetchData from '../Fetch';
import RoutesContainer from './RoutesContainer';
import DirectionsContainer from './DirectionsContainer';
import StopsContainer from './StopsContainer';
import Typography from '@material-ui/core/Typography';

class BusRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busIcon: true,
            directionIcon: false,
            stopIcon: false,
            title: 'Transit Routes'
        }
    }

    componentDidMount() {
        this.getBusRoutes();
    }

    getBusRoutes() {
        try {
            fetchData('Routes').then((result) => {
                this.props.storeRouteData(JSON.parse(result));
            })
        } catch (e) {
            console.log('ERROR IN GETBUSROUTES: ', e);
        }
    }

    handleRouteSelection = (routeChosen) => {
        let routeNumber = routeChosen[Object.keys(routeChosen)[Object.keys(routeChosen).length-1]];
        this.props.storeBusRoute(routeNumber);
        this.setState({busIcon: false, directionIcon: true, stopIcon: false, title: 'Transit Directions'});
        this.props.handleNext();
    };

    handleDirectionSelection = (directionChosen) => {
        this.props.storeSelectedDirection(directionChosen);
        this.setState({busIcon: false, directionIcon: false, stopIcon: true, title: 'Transit Stops'});
        this.props.handleNext();
    };

    handleStopsSelection = (stopChosen) => {
        this.props.storeSelectedDirection(stopChosen);
        this.setState({busIcon: false, directionIcon: false, stopIcon: false, title: 'Departures'});
        this.props.handleNext();
    };

    render() {
        return (
            <div>
                <Typography variant="h5">{this.state.title}</Typography>
                {this.state.busIcon ? <RoutesContainer handleRouteSelection={this.handleRouteSelection} activeStep={this.props.activeStep}/> : null}
                {this.state.directionIcon ? <DirectionsContainer handleDirectionSelection={this.handleDirectionSelection} activeStep={this.props.activeStep}/> : null}
                {this.state.stopIcon ? <StopsContainer handleStopsSelection={this.handleStopsSelection} activeStep={this.props.activeStep}/> : null}
            </div>
        )
    }

}
const mapStateToProps = () => {};
export default connect(mapStateToProps, { storeBusRoute, storeRouteData, storeSelectedDirection })(BusRoute);