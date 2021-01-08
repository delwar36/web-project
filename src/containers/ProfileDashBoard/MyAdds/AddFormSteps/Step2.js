import React, { Component } from 'react';
import classes from '../CreateAdd.module.css';
import Button from '../../../../components/UI/Button/Button';
import { AddAPhoto, VideoCall } from '@material-ui/icons';
import StepProgress from './StepProgress';


export class Step2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleAudienceAndVisibilityInput, t } = this.props;
        return (
            <React.Fragment>
                <StepProgress step={this.props.step} /> <span>Audience and Visibility</span>
                <div className={classes.Divider}></div>
                <div className={classes.AudienceAndVisibility}>
                    <div className={classes.AudienceAndVisibilityItems}>
                        <textarea
                            type='text'
                            minLength='20'
                            maxLength='50'
                            placeholder='Information about your audience'
                            value={values.audience}
                            onChange={(event) => handleAudienceAndVisibilityInput(event, 'title')}
                        ></textarea>
                        <strong>{values.title.length}/50 (maximum-50,minimum-20)</strong>
                    </div>
                    <div className={classes.DividerH}></div>
                    <div className={classes.MobileOnly}></div>
                    <div className={classes.AudienceAndVisibilityItems}>
                        <textarea
                            type='text'
                            minLength='20'
                            maxLength='50'
                            placeholder='Information about your visibility'
                            value={values.audience}
                            onChange={(event) => handleAudienceAndVisibilityInput(event, 'title')}
                        ></textarea>
                        <strong>{values.description.length}/300 (maximum-300,minimum-50)</strong>
                    </div>
                </div>

                <div className={classes.Divider}></div>
                <div className={classes.StepsButton}>
                    <Button buttonType='Apple' clicked={this.back} >{t('MyAds:CreateAdd.button2')}</Button>
                    <Button
                        buttonType='Submit'
                        clicked={this.continue}
                    >{t('MyAds:CreateAdd.button1')}</Button>
                    {/* <Button
            buttonType='Submit'
            clicked={this.continue}
          >{t('MyAds:CreateAdd.button1')}</Button> */}
                </div>

            </React.Fragment>
        );
    }
}

export default (Step2);
