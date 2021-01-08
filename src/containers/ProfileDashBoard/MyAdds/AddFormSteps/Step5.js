import React, { Component } from 'react';
import classes from '../CreateAdd.module.css';
import Button from '../../../../components/UI/Button/Button';
import StepProgress from './StepProgress';
const backgroundColors = ['#4dabf7', 'rgb(170, 235, 73)', 'tomato'];

class Step4 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };


  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { title, description, type, sub_type, packagesData, filesPreviews, advertiseSpecification } = this.props.values;
    const { t } = this.props;
    return <React.Fragment>
      <StepProgress step={this.props.step} />
      <div className={classes.Divider}></div>
      <div className={classes.ConfirmAdvertise}>
        <div className={classes.ConfirmAdvertiseItems}>
          <div className={classes.ConfirmAdvertiseItemRow}>
            <div className={classes.ConfirmAdvertiseItemColumn1}>
              <small>{t('MyAds:CreateAdd.Step4.firstSection.0')}</small>
            </div>
            <div className={classes.ConfirmAdvertiseItemColumn2}>
              <small>{title}</small>
            </div>
          </div>
          <div className={classes.DividerWithoutStyle}></div>
          <div className={classes.ConfirmAdvertiseItemRow}>
            <div className={classes.ConfirmAdvertiseItemColumn1}>
              <small>{t('MyAds:CreateAdd.Step4.firstSection.1')}</small>
            </div>
            <div className={classes.ConfirmAdvertiseItemColumn2}>
              <small>{description}</small>
            </div>
          </div>
          <div className={classes.DividerWithoutStyle}></div>
          <div className={classes.ConfirmAdvertiseItemRow}>
            <div className={classes.ConfirmAdvertiseItemColumn1}>
              <small>{t('MyAds:CreateAdd.Step4.firstSection.2')}</small>
            </div>
            <div className={classes.ConfirmAdvertiseItemColumn2}>
              <small>{type}</small>
            </div>
          </div>
          <div className={classes.DividerWithoutStyle}></div>
          <div className={classes.ConfirmAdvertiseItemRow}>
            <div className={classes.ConfirmAdvertiseItemColumn1}>
              <small>{t('MyAds:CreateAdd.Step4.firstSection.3')}</small>
            </div>
            <div className={classes.ConfirmAdvertiseItemColumn2}>
              <small>{sub_type}</small>
            </div>
          </div>
          <div className={classes.DividerWithoutStyle}></div>
          <div className={classes.ConfirmAdvertiseItemRow}>
            <div className={classes.ConfirmAdvertiseItemColumn1}>
              <small>{t('MyAds:CreateAdd.Step4.firstSection.4')}</small>
            </div>
            <div className={classes.ConfirmAdvertiseItemColumn2}>
              {advertiseSpecification.map((specification, index) => (
                specification.rule !== '' ?
                  <React.Fragment>
                    <small>{index + 1}. {specification.rule}</small><br />
                  </React.Fragment>
                  : null
              ))}
            </div>
          </div>
        </div>
        <div className={classes.DividerH}></div>
        <div className={classes.MobileOnly}></div>
        <div className={classes.ConfirmAdvertiseItems}>
          <div className={classes.ConfirmAdvertiseItemColumn1}>
            <small>{t('MyAds:CreateAdd.Step4.firstSection.5')}</small>
          </div>
          <div className={classes.ConfirmPhotos}>
            {filesPreviews.images.map(image => (
              <img src={image.url} alt='ImagePhoto' />
            ))}
          </div>
          <div className={classes.ConfirmPhotos}>
            {filesPreviews.video.map(video => (
              <video width="320" height="240" controls>
                <source src={video.url} type="video/mp4"></source>
              </video>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.Divider}></div>
      <div className={classes.PackagesConfirmHeader}>
        <small>{t('MyAds:CreateAdd.Step4.secondSection.0')}</small>
      </div>
      <div className={classes.DividerWithoutStyle}></div>
      <div className={classes.ConfirmAdvertise}>
        {packagesData.map((packageValue, index) => (
          packageValue.name.length !== 0 ?
            <React.Fragment>
              <div className={classes.ConfirmAdvertiseItems}>
                <div className={classes.ConfirmAdvertiseItemRow}>
                  <div className={classes.ConfirmAdvertiseItemColumn2}>
                    <div className={classes.PackageTypeHeader}
                      style={{ background: backgroundColors[index] }}>{packageValue.type}
                    </div>
                  </div>
                </div>
                <div className={classes.DividerWithoutStyle}></div>
                <div className={classes.ConfirmAdvertiseItemRow}>
                  <div className={classes.ConfirmAdvertiseItemColumn1}>
                    <small>{t('MyAds:CreateAdd.Step4.secondSection.1')}</small>
                  </div>
                  <div className={classes.ConfirmAdvertiseItemColumn2}>
                    <small>{packageValue.name}</small>
                  </div>
                </div>
                <div className={classes.DividerWithoutStyle}></div>
                <div className={classes.ConfirmAdvertiseItemRow}>
                  <div className={classes.ConfirmAdvertiseItemColumn1}>
                    <small>{t('MyAds:CreateAdd.Step4.secondSection.2')}</small>
                  </div>
                  <div className={classes.ConfirmAdvertiseItemColumn2}>
                    <small>{packageValue.description}</small>
                  </div>
                </div>
                <div className={classes.DividerWithoutStyle}></div>
                <div className={classes.ConfirmAdvertiseItemRow}>
                  <div className={classes.ConfirmAdvertiseItemColumn1}>
                    <small>{t('MyAds:CreateAdd.Step4.secondSection.3')}</small>
                  </div>
                  <div className={classes.ConfirmAdvertiseItemColumn2}>
                    {packageValue.tasks.map((task, index) => (
                      <React.Fragment>
                        <small>{index + 1}. {task}</small><br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className={classes.DividerWithoutStyle}></div>
                <div className={classes.ConfirmAdvertiseItemRow}>
                  <div className={classes.ConfirmAdvertiseItemColumn1}>
                    <small>{t('MyAds:CreateAdd.Step4.secondSection.4')}</small>
                  </div>
                  <div className={classes.ConfirmAdvertiseItemColumn2}>
                    <small>{packageValue.delivery_time} {packageValue.delivery_type}</small>
                  </div>
                </div>
                <div className={classes.DividerWithoutStyle}></div>
                <div className={classes.ConfirmAdvertiseItemRow}>
                  <div className={classes.ConfirmAdvertiseItemColumn1}>
                    <small>{t('MyAds:CreateAdd.Step4.secondSection.5')}</small>
                  </div>
                  <div className={classes.ConfirmAdvertiseItemColumn2}>
                    <small>{packageValue.price}$</small>
                  </div>
                </div>
              </div>
              <div className={classes.DividerWithoutStyleH}></div>
              <div className={classes.MobileOnly}></div>
            </React.Fragment>
            : null
        ))}
      </div>
      <div className={classes.Divider}></div>
      <div className={classes.StepsButton}>
        <Button buttonType='Apple' clicked={this.back} >{t('MyAds:CreateAdd.button2')}</Button>
        <Button
          buttonType='Submit'
          clicked={(event) => { this.continue(event); this.props.handleFormSubmit(event) }}
        >{t('MyAds:CreateAdd.button3')}</Button>
      </div>
    </React.Fragment>
  }
}

export default Step4;
