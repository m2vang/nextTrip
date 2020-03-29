import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import clsx from 'clsx';
import BusRoutes from './BusRoutes';
// material-ui
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
// material-ui icons
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import RefreshIcon from '@material-ui/icons/Refresh';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import DirectionsIcon from '@material-ui/icons/Directions';
import PanToolIcon from '@material-ui/icons/PanTool';

function stepIcons(props) {
	const classes = StepIconStyles();
	const { active, completed } = props;
	const icons = {
		1: <DirectionsBusIcon />,
		2: <DirectionsIcon />,
		3: <PanToolIcon />,
	};

	return (
		<div className={clsx(classes.root, {[classes.active]: active, [classes.completed]: completed })}>
			{icons[String(props.icon)]}
		</div>
	);
}

const RouteProcessSteppers = ({restart}) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const {steps} = useSelector(state => ({steps: state.bReducer.steps}));

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
		restart();
	};

	return (
		<div className={classes.root}>
			<Stepper alternativeLabel activeStep={activeStep} connector={<StepConnectorStyles/>}>
				{steps.map(label => (
					<Step key={label}>
						<StepLabel StepIconComponent={stepIcons}>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<BusRoutes handleNext={handleNext} activestep={activeStep}/>
			<div>
				{activeStep === steps.length ? (
					<div>
						<Typography className={classes.text}>
							Have a safe trip!
						</Typography>
						<Button variant="contained" color="primary" onClick={handleReset} className={classes.button}>
							Restart
							<RefreshIcon/>
						</Button>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default RouteProcessSteppers;

const StepConnectorStyles = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		'& $line': {
			backgroundImage:
				'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		},
	},
	completed: {
		'& $line': {
			backgroundImage:
				'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		},
	},
	line: {
		height: 3,
		border: 0,
		backgroundColor: '#eaeaf0',
		borderRadius: 1,
	},
})(StepConnector);

const StepIconStyles = makeStyles({
	root: {
		backgroundColor: '#ccc',
		zIndex: 1,
		color: '#fff',
		width: 50,
		height: 50,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	active: {
		backgroundImage:
			'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(205,34,39) 50%, rgb(63,81,181) 100%)',
		boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
	},
	completed: {
		backgroundImage:
			'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
	},
});

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	button: {
		fontWeight: 'bolder',
		marginRight: theme.spacing(1),
	},
	text: {
		fontSize: '22px',
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
}));

stepIcons.propTypes = {
	active: PropTypes.bool,
	completed: PropTypes.bool,
	icon: PropTypes.node,
};
