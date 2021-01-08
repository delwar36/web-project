import React, { Component } from 'react';
import classes from '../CreateAdd.module.css';
import Button from '../../../../components/UI/Button/Button';
import StepProgress from './StepProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SimpleSnackbar from '../../../../components/Snackbar/Snackbar';

const LinearProgressWithLabel = (props) =>
    <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary"> {props.value}% </Typography>
        </Box>
    </Box>

export class Step5 extends Component {
    componentDidMount() {
        window.scroll(0, 0)
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { t } = this.props;
        return <React.Fragment>
            <StepProgress step={this.props.step} />
            {this.props.message && !this.props.error ?
                <SimpleSnackbar open={true} message={this.props.message} type='success' height='40' />
                : null
            }
            {this.props.message && this.props.error ?
                <SimpleSnackbar open='true' message={this.props.message} type='error' height='50' />
                : null
            }
            {this.props.loading ? <LinearProgressWithLabel value={this.props.loading_percentage} /> :
                <React.Fragment>
                    {this.props.loading_percentage ? <LinearProgressWithLabel value={this.props.loading_percentage} /> : null}
                    <div className={classes.Congratulations}>
                        <h4>{t('MyAds:CreateAdd.Step5.0')}</h4>
                        <p>{t('MyAds:CreateAdd.Step5.1')}</p>
                    </div>
                    <div className={classes.Divider}></div>
                    <div className={classes.StepsButton}>
                        <Button
                            buttonType='Submit'
                            clicked={() => this.props.history.goBack()}
                        >Go My Advertises</Button>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    }
}

export default Step5;
