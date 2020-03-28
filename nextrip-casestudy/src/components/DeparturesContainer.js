import React, { Component } from 'react';
import {connect} from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import fetchData from '../Fetch';
import { storeDirectionData, storeDeparturesData } from '../redux/actions';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import CircularProgress from '@material-ui/core/CircularProgress';
import TableHead from "@material-ui/core/TableHead";

class DeparturesContainer extends Component {
	componentDidMount() {
		this.getDepartures();
	}

	getDepartures() {
		console.log('URL: ', this.props.busRoute, this.props.selectedDirection, this.props.selectedStop);
		try {
			let stopValue = this.props.selectedStop[Object.keys(this.props.selectedStop)[Object.keys(this.props.selectedStop).length-1]];

			fetchData(`${this.props.busRoute}/${this.props.selectedDirection}/${stopValue}`).then((result) => {
				console.log('RESPONSE: ', result);
				this.props.storeDeparturesData(JSON.parse(result));
			})
		} catch (e) {
			console.log('ERROR IN getDepartures: ', e);
		}
	}

	render() {
		let content;
		if (this.props.departures.length !== 0) {
			content = (
				<TableContainer style={styles.container}>
					<Table stickyHeader>
						<TableHead>
							<TableRow>
								{this.props.departuresTitle.map((name, index) => (
									<TableCell key={index} style={styles.tableHead} align={'center'}>
										{name}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{this.props.departures.map((departure, index) => {
								return (
									<TableRow key={index} hover style={styles.tableRow} >
										<TableCell style={styles.dirRow} align={'center'}>
											{departure.Route}
										</TableCell>
										<TableCell style={styles.dirRow} align={'center'}>
											{departure.Description}
										</TableCell>
										<TableCell style={styles.dirRow} align={'center'}>
											{departure.DepartureText}
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
		width: '60%',
		marginLeft: '20%',
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
const mapStateToProps = ({ bReducer, dReducer, sReducer, departReducer }) => {
	const { busRoute } = bReducer;
	const { selectedDirection } = dReducer;
	const { selectedStop } = sReducer;
	const { departures, departuresTitle } = departReducer;
	return { selectedStop, busRoute, selectedDirection, departures, departuresTitle };
};
export default connect(mapStateToProps, { storeDirectionData, storeDeparturesData })(withStyles(styles)(DeparturesContainer));