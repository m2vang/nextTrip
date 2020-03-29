import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import { storeBusRoute, storeRouteData, storeSelectedDirection, storeSelectedStop } from '../redux/actions/index';
import fetchData from '../Fetch';
import RoutesContainer from './RoutesContainer';
import DirectionsContainer from './DirectionsContainer';
import StopsContainer from './StopsContainer';
import DeparturesContainer from './DeparturesContainer';
import Typography from '@material-ui/core/Typography';

class BusRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busIcon: true,
            directionIcon: false,
            stopIcon: false,
            titleEnding: 'Transit Routes'
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
            console.log('ERROR IN getBusRoutes: ', e);
        }
    }

    handleRouteSelection = (routeChosen) => {
        this.props.storeBusRoute(routeChosen);
        this.setState({busIcon: false, directionIcon: true, stopIcon: false, titleEnding: 'Transit Directions'});
        this.props.handleNext();
    };

    handleDirectionSelection = (directionChosen) => {
        this.props.storeSelectedDirection(directionChosen);
        this.setState({busIcon: false, directionIcon: false, stopIcon: true, titleEnding: 'Transit Stops'});
        this.props.handleNext();
    };

    handleStopsSelection = (stopChosen) => {
        this.props.storeSelectedStop(stopChosen);
        this.setState({busIcon: false, directionIcon: false, stopIcon: false, titleEnding: 'Departures'});
        this.props.handleNext();
    };

    render() {
        let title;
        if (!this.state.busIcon && this.state.directionIcon && !this.state.stopIcon && this.props.busRoute) {
            title = this.props.busRoute.Description;
        } else if (!this.state.busIcon && !this.state.directionIcon && this.state.stopIcon && this.props.selectedDirection) {
            title = this.props.busRoute.Description + ' ' + this.props.selectedDirection.Text;
        } else if (!this.state.busIcon && !this.state.directionIcon && !this.state.stopIcon && this.props.selectedStop) {
            title = this.props.busRoute.Description + ' ' + this.props.selectedDirection.Text + ' ' + this.props.selectedStop.Text;
        }
        return (
            <div>
                <Typography variant="h5" style={window.innerWidth > 768 ? styles.title : styles.titleMobile}>{title}<span> </span>{this.state.titleEnding}</Typography>
                {this.state.busIcon ? <RoutesContainer handleRouteSelection={this.handleRouteSelection} activeStep={this.props.activeStep}/> : null}
                {this.state.directionIcon ? <DirectionsContainer handleDirectionSelection={this.handleDirectionSelection} activeStep={this.props.activeStep}/> : null}
                {this.state.stopIcon ? <StopsContainer handleStopsSelection={this.handleStopsSelection} activeStep={this.props.activeStep}/> : null}
                {!this.state.busIcon && !this.state.directionIcon && !this.state.stopIcon ? <DeparturesContainer /> : null}
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