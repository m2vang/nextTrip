import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeBusRoute } from '../redux/actions/index';
import fetchData from '../Fetch';

class BusRoute extends Component {
    componentDidMount() {
        this.getBusRoutes();
    }

    getBusRoutes() {
        console.log('In Bus routes!');

        try {
            fetchData('Routes').then((result) => {
                console.log('RESULTS: ', result);
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
                <h1>Bus Routes</h1>
                <button onClick={this.click}>Click</button>
            </div>
        )
    }

}
const mapStateToProps = ({bRoute}) => {
    const { busRoute } = bRoute;
    return { busRoute };
}
export default connect(mapStateToProps, { storeBusRoute })(BusRoute);