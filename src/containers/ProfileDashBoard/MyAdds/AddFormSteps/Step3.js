import React, { Component, Fragment } from 'react';
import classes from '../CreateAdd.module.css';
import Button from '../../../../components/UI/Button/Button';
import StepProgress from './StepProgress';
import { SinglePackageItem } from './SinglePackageItem';

class Step2 extends Component {
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
    const { values, getSelectedNumberOfPackage, handlePackagesData, handleAddTasksFields, handleTasksInputChange, handleRemoveTasksFields } = this.props;
    const { t } = this.props
    return (
      <React.Fragment>
        <StepProgress step={this.props.step} />
        <div className={classes.NB}><small>{t('MyAds:CreateAdd.NB')}</small></div>
        <div className={classes.NumberOfPackage}>
          <small>{t('MyAds:CreateAdd.Step2.title')}</small>
          <select
            className={classes.DownArrow} onChange={(event) => getSelectedNumberOfPackage(event)}>
            <option value='1' selected={values.numberOfPackage === 1 ? true : false}>1</option>
            <option value='2' selected={values.numberOfPackage === 2 ? true : false}>2</option>
            <option value='3' selected={values.numberOfPackage === 3 ? true : false}>3</option>
          </select>
        </div>
        <div className={classes.Divider}></div>
        <h6>{t('MyAds:CreateAdd.Step2.name')}</h6>
        <div className={classes.DividerWithoutStyle}></div>
        <div className={classes.PackageDescription}>
          {values.numberOfPackage >= 1 ?
            <SinglePackageItem
              packageType={t('MyAds:CreateAdd.Step2.packageTypes.0')}
              selectedPackage={1}
              values={values}
              handlePackagesData={handlePackagesData}
              handleAddTasksFields={handleAddTasksFields}
              handleRemoveTasksFields={handleRemoveTasksFields}
              handleTasksInputChange={handleTasksInputChange}
            />
            : null
          }
          {values.numberOfPackage >= 2 ?
            <React.Fragment>
              <div className={classes.DividerH}></div>
              <SinglePackageItem
                packageType={t('MyAds:CreateAdd.Step2.packageTypes.1')}
                selectedPackage={2}
                values={values}
                handlePackagesData={handlePackagesData}
                handleAddTasksFields={handleAddTasksFields}
                handleRemoveTasksFields={handleRemoveTasksFields}
                handleTasksInputChange={handleTasksInputChange}
              />
            </React.Fragment>
            : null
          }
          {values.numberOfPackage >= 3 ?
            <React.Fragment>
              <div className={classes.DividerH}></div>
              <SinglePackageItem
                packageType={t('MyAds:CreateAdd.Step2.packageTypes.2')}
                selectedPackage={3}
                values={values}
                handlePackagesData={handlePackagesData}
                handleAddTasksFields={handleAddTasksFields}
                handleRemoveTasksFields={handleRemoveTasksFields}
                handleTasksInputChange={handleTasksInputChange}
              />
            </React.Fragment>
            : null
          }
        </div>
        <div className={classes.Divider}></div>
        <div className={classes.StepsButton}>
          <Button buttonType='Apple' clicked={this.back} >{t('MyAds:CreateAdd.button2')}</Button>
          {/* <Button
            buttonType='Submit'
            clicked={this.continue}
          >{t('MyAds:CreateAdd.button1')}</Button> */}

          {values.numberOfPackage === 1 ?
            <Button
              buttonType='Submit'
              clicked={this.continue}
              disabled={
                values.packagesData[0].name.length < 20 ||
                  values.packagesData[0].description.length < 50 ||
                  values.packagesData[0].tasks.length === 0 ||
                  values.packagesData[0].delivery_time.length === 0 ||
                  values.packagesData[0].delivery_type.length === 0 ||
                  values.packagesData[0].price.length === 0 ? true : false
              }
            >{t('MyAds:CreateAdd.button1')}</Button> : null}
          {values.numberOfPackage === 2 ?
            <Button
              buttonType='Submit'
              clicked={this.continue}
              disabled={
                values.packagesData[0].name.length < 20 ||
                  values.packagesData[0].description.length < 50 ||
                  values.packagesData[0].tasks.length === 0 ||
                  values.packagesData[0].delivery_time.length === 0 ||
                  values.packagesData[0].delivery_type.length === 0 ||
                  values.packagesData[0].price.length === 0 ||

                  values.packagesData[1].name.length < 20 ||
                  values.packagesData[1].description.length < 50 ||
                  values.packagesData[1].tasks.length === 0 ||
                  values.packagesData[1].delivery_time.length === 0 ||
                  values.packagesData[1].delivery_type.length === 0 ||
                  values.packagesData[1].price.length === 0 ? true : false
              }
            >{t('MyAds:CreateAdd.button1')}</Button> : null}
          {values.numberOfPackage === 3 ?
            <Button
              buttonType='Submit'
              clicked={this.continue}
              disabled={
                values.packagesData[0].name.length < 20 ||
                  values.packagesData[0].description.length < 50 ||
                  values.packagesData[0].tasks.length === 0 ||
                  values.packagesData[0].delivery_time.length === 0 ||
                  values.packagesData[0].delivery_type.length === 0 ||
                  values.packagesData[0].price.length === 0 ||

                  values.packagesData[1].name.length < 20 ||
                  values.packagesData[1].description.length < 50 ||
                  values.packagesData[1].tasks.length === 0 ||
                  values.packagesData[1].delivery_time.length === 0 ||
                  values.packagesData[1].delivery_type.length === 0 ||
                  values.packagesData[1].price.length === 0 ||

                  values.packagesData[2].name.length < 20 ||
                  values.packagesData[2].description.length < 50 ||
                  values.packagesData[2].tasks.length === 0 ||
                  values.packagesData[2].delivery_time.length === 0 ||
                  values.packagesData[2].delivery_type.length === 0 ||
                  values.packagesData[2].price.length === 0 ? true : false
              }
            >{t('MyAds:CreateAdd.button1')}</Button> : null}
        </div>
      </React.Fragment >
    );
  }
}

export default Step2
