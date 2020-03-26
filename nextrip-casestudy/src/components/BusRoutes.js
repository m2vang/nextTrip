import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeBusRoute, storeRouteData } from '../redux/actions/index';
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
        console.log('in click', routeChosen);
        this.props.storeBusRoute(routeChosen);
        this.setState({busIcon: false, directionIcon: true, stopIcon: false});
        this.props.handleNext();
    };

    render() {
        return (
            <div>
                <Typography variant="h5">Transit Routes</Typography>
                {this.state.busIcon ? <RoutesContainer handleRouteSelection={this.handleRouteSelection}/> : null}
                {this.state.directionIcon ? <DirectionsContainer/> : null}
            </div>
        )
    }

}
const mapStateToProps = ({bRoute}) => {
    const { busRoute } = bRoute;
    return { busRoute };
};
export default connect(mapStateToProps, { storeBusRoute, storeRouteData })(BusRoute);