import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

export default function Header() {
	const classes = useStyles();
	return (
		<div className={classes.header__container} aria-label="NextTrip Metro Transit Title Container">
			<h1 className={classes.header__text} aria-label="NextTrip Metro Transit Title">NextTrip - Metro Transit</h1>
		</div>
	)
}

const useStyles = makeStyles(theme => ({
	header__container: {
		backgroundColor: '#cd2026',
		paddingTop: 1,
	},
	header__text: {
		color: '#ffffff',
		textAlign: 'left',
		padding: '0px 0px 5px 10px',
	}
}));