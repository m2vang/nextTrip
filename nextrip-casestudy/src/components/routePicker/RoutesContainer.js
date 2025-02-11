import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

class RoutesContainer extends Component {
	handleRouteClick = (route) => {
		this.props.handleRouteSelection(route);
		this.props.handleNext();
	};
	render() {
		let content;
		if (this.props.routeTitles && this.props.routeData) {
			content = (
				<TableContainer style={styles.container}>
					<Table stickyHeader>
					<TableHead>
						<TableRow>
							{this.props.routeTitles.map((item, index) => (
								<TableCell key={index} style={styles.tableHead}>
									{item}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{this.props.routeData.map((route, index) => {
							return (
								<TableRow key={index} hover style={styles.tableRow} onClick={() => this.handleRouteClick(route)}>
									<TableCell style={styles.routeRow}>
										{route.Route}
									</TableCell>
									<TableCell>
										{route.Description}
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
const mapStateToProps = ({bReducer}) => {
	const { routeData, routeTitles } = bReducer;
	return { routeData, routeTitles };
};
export default connect(mapStateToProps, {})(withStyles(styles)(RoutesContainer));