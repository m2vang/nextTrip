import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeBusRoute, storeRouteData } from '../redux/actions/index';
import fetchData from '../Fetch';
import RoutesContainer from "./RoutesContainer";

class BusRoute extends Component {
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

    click = () => {
        console.log('in click');
        this.props.storeBusRoute(9);
    };

    render() {
        return (
            <div>
                <h1>Transit Routes</h1>
                <RoutesContainer/>
            </div>
        )
    }

}
const mapStateToProps = ({bRoute}) => {
    const { busRoute } = bRoute;
    return { busRoute };
};
export default connect(mapStateToProps, { storeBusRoute, storeRouteData })(BusRoute);