import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeBusRoute, storeRouteData, storeSelectedDirection } from '../redux/actions/index';
import fetchData from '../Fetch';
import RoutesContainer from "./RoutesContainer";
import Typography from "@material-ui/core/Typography";
import DirectionsContainer from "./DirectionsContainer";

class BusRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            busIcon: true,
            directionIcon: false,
            stopIcon: false
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
        console.log('ROUTE NUM: ', routeNumber);
        this.props.storeBusRoute(routeNumber);
        this.setState({busIcon: false, directionIcon: true, stopIcon: false});
        this.props.handleNext();
    };

    handleDirectionSelection = (directionChosen) => {
        console.log('directionChosen: ', directionChosen);
        this.props.storeSelectedDirection(directionChosen);
        this.setState({busIcon: false, directionIcon: false, stopIcon: true});
        this.props.handleNext();
    };

    render() {
        return (
            <div>
                <Typography variant="h5">Transit Routes</Typography>
                {this.state.busIcon ? <RoutesContainer handleRouteSelection={this.handleRouteSelection} activeStep={this.props.activeStep}/> : null}
                {this.state.directionIcon ? <DirectionsContainer handleDirectionSelection={this.handleDirectionSelection} activeStep={this.props.activeStep}/> : null}
            </div>
        )
    }

}
const mapStateToProps = ({bRoute}) => {
    const { busRoute } = bRoute;
    return { busRoute };
};
export default connect(mapStateToProps, { storeBusRoute, storeRouteData, storeSelectedDirection })(BusRoute);