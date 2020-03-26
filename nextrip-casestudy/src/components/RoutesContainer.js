import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';

class RoutesContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let content;
		if (this.props.routeTitles && this.props.routeData) {
			content = (
				<TableContainer style={styles.container}>
					<TableHead>
						<TableRow>
							{this.props.routeTitles.map((item, index) => (
								<TableCell key={index} style={styles.tableHead}>{item}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{this.props.routeData.map((route, index) => {
							return (
								<TableRow key={index}>
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
		marginLeft: '30%',
		border: '2px solid',
		borderRadius: '10px',
		marginBottom: '15px'
	},
	rootMobile: {
		width: '100%',
		marginLeft: '1%',
		border: '2px solid',
		borderRadius: '10px',
		marginBottom: '15px'
	},
	container: {
		maxHeight: 440,
	},
	tableHead: {
		fontWeight: 'bolder'
	},
	routeRow: {
		paddingRight: '45px'
	}
};
const mapStateToProps = ({bRoute}) => {
	const { routeData, routeTitles } = bRoute;
	return { routeData, routeTitles };
};
export default connect(mapStateToProps, {})(withStyles(styles)(RoutesContainer));