import React, { Component, Fragment } from 'react';
import classes from '../CreateAdd.module.css';
import Button from '../../../../components/UI/Button/Button';
import StepProgress from './StepProgress';
import SimpleSnackbar from '../../../../components/Snackbar/Snackbar';

export class FormUserDetails extends Component {
  state = {
    error: false
  }
  componentDidMount() {
    window.scroll(0, 0)
  }
  hasError = () => {
    this.setState({
      error: true
    });
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleAddTitleDescription, getSelectedOption, handleAddFields, handleRemoveFields, handleTypeInputChange, addType, addSubType, handleSubTypeInputChange } = this.props;
    const { t } = this.props
    return (
      <Fragment>
        <StepProgress step={this.props.step} />
        {
          this.props.message && !this.props.error ?
            <SimpleSnackbar open={true} message={this.props.message} type='success' height='40' />
            : null
        }
        {
          this.props.message && this.props.error ?
            <SimpleSnackbar open='true' message={this.props.message} type='error' height='50' />
            : null
        }
        <div className={classes.NB}><small>{t('MyAds:CreateAdd.NB')}</small></div>
        <span>{t('MyAds:CreateAdd.Step1.firstSection.title')}</span>
        <div className={classes.Divider}></div>
        <div className={classes.TypeAndSubType}>
          <div className={classes.Type}>
            <select className={classes.DownArrow} onChange={(event) => getSelectedOption(event, 'type')}>
              <option disabled selected>{t('MyAds:CreateAdd.Step1.firstSection.typeOptions.0')}</option>
              {
                values.select.map((value, index) => (
                  <option selected={values.type === value.type ? true : false} value={index}>{value.type}</option>
                ))
              }
            </select>
            <div className={classes.DividerWithoutStyle}></div>
            <small>{t('MyAds:CreateAdd.Step1.firstSection.others.0')}</small>
            <div className={classes.DividerWithoutStyle}></div>
            <div className={classes.AddOrRemoveButton}>
              <Button
                disabled={values.inputTypeFields.length > 2 ? true : false}
                buttonType='Apple'
                clicked={(e) => handleAddFields('type')}>
                <i class="fas fa-plus"></i>
              </Button>
              <Button
                disabled={values.inputTypeFields.length === 0 ? true : false}
                buttonType='Google'
                clicked={(e) => handleRemoveFields('type')}>
                <i className="fas fa-times"></i>
              </Button>
              <Button
                disabled={values.inputTypeFields.length === 0 ? true : false}
                buttonType='Submit' clicked={addType}>
                <i class="fas fa-check"></i>
              </Button>
            </div>
            <div className={classes.typeAndSubTypeField}>
              {values.inputTypeFields.map((fieldValue, index) =>
                <Fragment key={index}>
                  <input
                    type='text'
                    name='type'
                    value={fieldValue.type}
                    onChange={event => handleTypeInputChange(index, event)}
                  />
                </Fragment>
              )}
            </div>
          </div>
          <div className={classes.DividerH}></div>
          <div className={classes.MobileOnly}></div>
          <div className={classes.SubType}>
            <select className={classes.DownArrow} onChange={(event) => getSelectedOption(event, 'sub_type')}>
              <option disabled selected>{t('MyAds:CreateAdd.Step1.firstSection.subtypeOptions.0')} {values.selectedIndex ? values.select[values.selectedIndex].type : null}</option>
              {
                values.selectedIndex ? values.select[values.selectedIndex].sub_type.map((subType, index) => (
                  <option
                    selected={values.sub_type === subType ? true : false}
                    value={index}
                  >{subType} </option>
                ))
                  : null
              }
            </select>
            <div className={classes.DividerWithoutStyle}></div>
            <small>{t('MyAds:CreateAdd.Step1.firstSection.others.1')}</small>
            <div className={classes.DividerWithoutStyle}></div>
            <div className={classes.AddOrRemoveButton}>
              {values.selectedIndex ?
                <React.Fragment>
                  <Button
                    disabled={values.inputSubTypeFields.length > 2 ? true : false}
                    buttonType='Apple'
                    clicked={(e) => handleAddFields('sub_type')}>
                    <i className="fas fa-plus"></i>
                  </Button>
                  <Button
                    buttonType='Google'
                    disabled={values.inputSubTypeFields.length === 0 ? true : false}
                    clicked={(e) => handleRemoveFields('sub_type')}>
                    <i className="fas fa-times"></i>
                  </Button>
                  <Button
                    disabled={values.inputSubTypeFields.length === 0 ? true : false} buttonType='Submit' clicked={addSubType}>
                    <i class="fas fa-check"></i>
                  </Button>
                </React.Fragment>
                : null}
            </div>
            <div className={classes.typeAndSubTypeField}>
              {values.inputSubTypeFields.map((fieldValue, index) =>
                <Fragment key={index}>
                  <input
                    type='text'
                    name='sub_type'
                    className='v'
                    value={fieldValue.sub_type}
                    onChange={event => handleSubTypeInputChange(index, event)}
                  />
                </Fragment>
              )}
            </div>
          </div>
        </div>
        <div className={classes.Divider}></div>
        <div className={classes.InputElement}>
          <span>{t('MyAds:CreateAdd.Step1.secondSection.title')}</span>
          <div className={classes.Divider}></div>
          <div className={classes.TitleAndDescription}>
            <div className={classes.Title}>
              <textarea
                type='text'
                minLength='20'
                maxLength='50'
                placeholder={t('MyAds:CreateAdd.Step1.secondSection.fields.0')}
                value={values.title}
                autoFocus={true}
                onChange={(event) => handleAddTitleDescription(event, 'title')}
              ></textarea>
              <strong>{values.title.length}/50 (maximum-50,minimum-20)</strong>
            </div>
            <div className={classes.DividerH}></div>
            <div className={classes.MobileOnly}></div>
            <div className={classes.Description}>
              <textarea
                minLength='50'
                maxLength='300'
                placeholder={t('MyAds:CreateAdd.Step1.secondSection.fields.1')}
                value={values.description}
                onChange={(event) => handleAddTitleDescription(event, 'description')}
              ></textarea>
              <strong>{values.description.length}/300 (maximum-300,minimum-50)</strong>
            </div>
          </div>
        </div>
        <div className={classes.Divider}></div>
        <div className={classes.StepsButton}>
          <Button
            buttonType='Submit'
            disabled={
              values.title.length < 20 || values.description.length < 50 || values.type.length === 0 || values.sub_type.length === 0 ? true : false
            }
            clicked={this.continue}>{t('MyAds:CreateAdd.button1')}</Button>
          {/* <Button
            buttonType='Submit'
            clicked={this.continue}>{t('MyAds:CreateAdd.button1')}</Button> */}
        </div>
      </Fragment >
    );
  }
}

export default (FormUserDetails);
