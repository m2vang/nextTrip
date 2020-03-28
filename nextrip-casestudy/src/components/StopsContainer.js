import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import fetchData from '../Fetch';
import { storeStopsData } from '../redux/actions';

class StopsContainer extends Component {
	componentDidMount() {
		this.getStops();
	}

	getStops() {
		try {
			fetchData(`Stops/${this.props.busRoute}/${this.props.selectedDirection}`).then((result) => {
				console.log('RESPONSE: ', JSON.parse(result));
				this.props.storeStopsData(JSON.parse(result));
			})
		} catch (e) {
			console.log('ERROR IN getDirections: ', e);
		}
	}

	render() {
		let content;
		if (this.props.stopsArr) {
			content = (
				<TableContainer style={styles.container}>
					<Table stickyHeader>
						<TableBody>
							{this.props.stopsArr.map((stops, index) => {
								return (
									<TableRow key={index} hover style={styles.tableRow} onClick={() => this.props.handleStopsSelection(stops)}>
										<TableCell style={styles.routeRow}>
											{stops.Text}
										</TableCell>
									</TableRow>
								)
							})}
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
		width: '99%',
		marginLeft: '1%',
		border: '1px solid',
		borderRadius: '5px',
		marginBottom: '15px'
	},
	container: {
		maxHeight: 440,
	},
	tableHead: {
		fontWeight: 'bolder'
	},
	tableRow: {
		cursor: 'pointer'
	},
	routeRow: {
		paddingRight: '45px',
	}
};
const mapStateToProps = ({sReducer, dReducer, bReducer}) => {
	const { busRoute } = bReducer;
	const { stopsArr, selectedStop } = sReducer;
	const { selectedDirection } = dReducer;
	return { stopsArr, selectedStop, selectedDirection, busRoute };
};
export default connect(mapStateToProps, { storeStopsData })(withStyles(styles)(StopsContainer));