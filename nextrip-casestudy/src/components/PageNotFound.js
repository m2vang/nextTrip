import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FindInPageIcon from '@material-ui/icons/FindInPage';

const PageNotFound = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12} className={classes.container}>
					<Typography variant="h2" className={classes.header}><FindInPageIcon className={classes.icon}/>404 Page</Typography>
					<Typography variant="h3" className={classes.text}>Sorry, Page Not Found</Typography>
				</Grid>
			</Grid>
		</div>
	)
};
const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		backgroundColor: '#d6d7d9'
	},
	container: {
		textAlign: 'center',
		backgroundColor: '#ffffff',
		maxWidth: '30%',
		marginLeft: '35%',
		border: '2px solid',
		borderRadius: '5px',
		marginTop: theme.spacing(9)
	},
	header: {
		fontWeight: 'bolder',
	},
	icon: {
		fontSize: '40px'
	},
	text: {
		fontSize: '22px',
		marginTop: theme.spacing(1),
	},
}));
export default PageNotFound;