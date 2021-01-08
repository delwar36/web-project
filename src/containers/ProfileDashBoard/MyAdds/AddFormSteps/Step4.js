import React, { Component } from 'react';
import classes from '../CreateAdd.module.css';
import Button from '../../../../components/UI/Button/Button';
import { AddAPhoto, VideoCall } from '@material-ui/icons';
import StepProgress from './StepProgress';


export class Step3 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, advertiseSpecificationData, handleAdvertiseFiles, handleRemoveFile, t } = this.props;
    return (
      <React.Fragment>
        <StepProgress step={this.props.step} />
        <div className={classes.NB}><small>{t('MyAds:CreateAdd.NB')}</small></div>
        <div className={classes.Divider}></div>
        <div className={classes.HavePhotos}>
          <div className={classes.FileInput}>
            <input type='file'
              accept='image/*'
              multiple
              onChange={(event) => handleAdvertiseFiles(event, 'images')}
              id='image' />
            <label htmlFor='image'>
              <AddAPhoto /><span>{t('MyAds:CreateAdd.Step3.0')}</span>
            </label>
          </div>
        </div>
        <strong>(minimum-1,maximum-3,max-size:10MB)</strong>
        <div className={classes.Photos}>
          {values.filesPreviews ?
            values.filesPreviews.images.map((image, index) => (
              <div className={classes.PhotosItems} key={index}>
                <img src={image.url} alt='ImagePhoto' />
                <Button
                  clicked={(event) => handleRemoveFile(image.url, 'images', index)}>
                  <i className="fas fa-times"></i>
                </Button>
              </div>
            )) : null}
        </div>
        <div className={classes.Divider}></div>
        <div className={classes.HavePhotos}>
          <div className={classes.FileInput}>
            <input
              type='file'
              accept='video/*'
              onChange={(event) => handleAdvertiseFiles(event, 'video')}
              id='video' />
            <label htmlFor='video'>
              <VideoCall /><span>{t('MyAds:CreateAdd.Step3.1')}</span>
            </label>
          </div>
        </div>
        <strong>(minimum-0,maximum-1,max-size:10MB)</strong>
        <div className={classes.Photos}>
          {values.filesPreviews ?
            values.filesPreviews.video.map((video, index) => (
              <div className={classes.PhotosItems} key={index}>
                <video width="330" height="250" controls>
                  <source src={video.url} type="video/mp4"></source>
                </video>
                <Button
                  clicked={(event) => handleRemoveFile(video.url, 'video', index)}>
                  <i className="fas fa-times"></i>
                </Button>
              </div>
            )) : null}
        </div>
        {values.filesSizeError ? <span style={{ color: 'red' }}>Your selected images or video is so large...</span> : null}
        <div className={classes.Divider}></div>
        <h6>{t('MyAds:CreateAdd.Step3.2')}</h6>
        <br />
        <strong>{t('MyAds:CreateAdd.Step3.3')}</strong>
        <br />
        <div className={classes.DividerWithoutStyle}></div>
        <div className={classes.AdvertiseSpecification}>
          {values.advertiseSpecification.map((specification, index) => (
            <div className={classes.AdvertiseSpecificationItem}>
              <div className={classes.AdvertiseSpecificationSingleItem}>
                <div>{index + 1}.</div>
                <div className={classes.AdvertiseSpecificationTextArea}><textarea
                  type='text'
                  minLength='100'
                  maxLength='250'
                  value={specification.rule}
                  onChange={(event) => advertiseSpecificationData(event, index)}
                ></textarea>
                  <strong>{specification.rule.length}/250</strong></div>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.Divider}></div>
        <div className={classes.StepsButton}>
          <Button buttonType='Apple' clicked={this.back} >{t('MyAds:CreateAdd.button2')}</Button>
          <Button
            buttonType='Submit'
            clicked={this.continue}
            disabled={
              values.advertiseSpecification[0].rule.length < 100 ||
                values.advertiseSpecification[1].rule.length < 100 ||
                values.advertiseSpecification[2].rule.length < 100 ||
                values.filesSizeError ? true : false
            }
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

export default (Step3);
