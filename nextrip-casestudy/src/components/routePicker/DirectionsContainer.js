import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import fetchData from '../Fetch';
import { storeDirectionData } from '../../redux/actions';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import CircularProgress from '@material-ui/core/CircularProgress';

class DirectionsContainer extends Component {
	componentDidMount() {
		this.getDirections();
	};

	getDirections() {
		let routeNumber = this.props.busRoute[Object.keys(this.props.busRoute)[Object.keys(this.props.busRoute).length-1]];
		try {
			fetchData(`Directions/${routeNumber}`).then((result) => {
				console.log('DIRECTIONS: ', JSON.parse(result));
				this.props.storeDirectionData(JSON.parse(result));
			})
		} catch (e) {
			console.log('ERROR IN getDirections: ', e);
		}
	};

	handleDirectionsClick = (direction) => {
		this.props.handleDirectionSelection(direction);
		this.props.handleNext();
	};

	render() {
		let content;
		if (this.props.directionsArr.length !== 0) {
			content = (
				<TableContainer style={styles.container}>
					<Table stickyHeader>
						<TableBody>
							{this.props.directionsArr.map((dir, index) => {
								return (
									<TableRow key={index} hover style={styles.tableRow} onClick={() => this.handleDirectionsClick(dir)}>
										<TableCell style={styles.dirRow} align={'center'}>
											{dir.Text}
										</TableCell>
									</TableRow>)})}
						</TableBody>
					</Table>
				</TableContainer>
			)
		} else {
			content = <CircularProgress/>;
		}
		return (
			<div style={window.innerWidth > 768 ? styles.root : styles.rootMobile}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						{content}
					</Grid>
				</Grid>
			</div>
		)
	}
}

const styles = {
	root: {
		width: '45%',
		marginLeft: '28%',
		border: '2px solid',
		borderRadius: '5px',
		marginBottom: '15px'
	},
	rootMobile: {
		width: '60%',
		marginLeft: '20%',
		border: '1px solid',
		borderRadius: '5px',
		marginBottom: '15px'
	},
	container: {
		maxHeight: 440,
	},
	tableRow: {
		cursor: 'pointer'
	},
	dirRow: {
		paddingRight: '45px',
	}
};
const mapStateToProps = ({bReducer, dReducer}) => {
	const { busRoute } = bReducer;
	const { directionsArr } = dReducer;
	return { busRoute, directionsArr };
};
export default connect(mapStateToProps, { storeDirectionData })(withStyles(styles)(DirectionsContainer));