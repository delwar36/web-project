import React from 'react';
import { withTranslation } from 'react-i18next'
import classes from './UserProfile.module.css';
import Button from '../../../components/UI/Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import PropTypes from 'prop-types';
import { Spinner } from '../../../components/UI/Spinner/Spinner';
import CryptoJS from 'crypto-js';
import  'dotenv/config';

const REFERRAL_CODE_SECRET = process.env.REACT_APP_REFERRAL_CODE_SECRET_KEY;

class UserProfile extends React.Component {
    componentDidMount() {
        if (!this.props.profile) this.props.onGetProfile();
    }
    render() {
        const { t } = this.props;
       
        let profileData = <Spinner />
        if (!this.props.loading && this.props.profile) {
            const { gender, age, description, country, contact_number, street, state, city, zip_code, location, cover_photo, user } = this.props.profile;

            const { full_name, email, profile_image, referral_code, is_verified } = user;
            const cipherText = CryptoJS.AES.encrypt(referral_code, REFERRAL_CODE_SECRET).toString();
            // Decrypt
            // var bytes = CryptoJS.AES.decrypt(cipherText, 'secret key 123');
            // var originalText = bytes.toString(CryptoJS.enc.Utf8);
            const number = contact_number ? contact_number.split('$', 2)[0] + contact_number.split('$', 2)[1] : null;

            profileData = <React.Fragment>
                <div className={classes.UserProfile}>
                    <div className={classes.CoverPhotoAndAll}>
                        <img src={cover_photo ? cover_photo : null} className={classes.CoverPhoto} alt="CoverPhoto" />
                        <div className={classes.Main}>
                            <img src={profile_image ? profile_image : null} alt='ProfileImage' />
                            <h2>{full_name ? full_name : null}</h2>
                            <div className={classes.DividerWithoutColor}></div>
                            <div className={classes.AboutMe}>
                                <h4>{t('UserProfile:firstSection.title')}</h4>
                                <div className={classes.Divider}></div>
                                <div className={classes.ProfileContent}>
                                    <div className={classes.Label}>{t('UserProfile:firstSection.names.0')}</div>
                                    <div className={classes.LabelValue}>{email}</div>
                                </div>
                                <div className={classes.DividerWithoutColor}></div>
                                <div className={classes.ProfileContent}>
                                    <div className={classes.Label}>{t('UserProfile:firstSection.names.1')}</div>
                                    <div className={classes.LabelValue}>[{cipherText}][to share an advertise add the code(with backslash) after individual advertise link]</div>
                                </div>
                                <div className={classes.DividerWithoutColor}></div>
                                <div className={classes.ProfileContent}>
                                    <div className={classes.Label}>{t('UserProfile:firstSection.names.2')}</div>
                                    <div className={classes.LabelValue}>{is_verified ? 'Yes' : 'No'}</div>
                                </div>
                                <div className={classes.DividerWithoutColor}></div>
                                <div className={classes.ProfileContent}>
                                    <div className={classes.Label}>{t('UserProfile:firstSection.names.3')}</div>
                                    <div className={classes.LabelValue}>{gender}</div>
                                </div>
                                <div className={classes.DividerWithoutColor}></div>
                                <div className={classes.ProfileContent}>
                                    <div className={classes.Label}>{t('UserProfile:firstSection.names.4')}</div>
                                    <div className={classes.LabelValue}>{age}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.AboutMe}>
                        <h4>{t('UserProfile:secondSection.title')}</h4>
                        <div className={classes.Divider}></div>
                        <div className={classes.ProfileContent}>
                            <div className={classes.Label}>{t('UserProfile:secondSection.names.mobile.0')}</div>
                            <div className={classes.LabelValue}>{full_name ? full_name : null}</div>
                        </div>
                        <div className={classes.DividerWithoutColor}></div>
                        <div className={classes.ProfileContent}>
                            <div className={classes.Label}>{t('UserProfile:secondSection.names.mobile.1')}</div>
                            <div className={classes.LabelValue}>{description}</div>
                        </div>
                        <div className={classes.DividerWithoutColor}></div>
                        <div className={classes.ProfileContent}>
                            <div className={classes.Label}>{t('UserProfile:secondSection.names.mobile.2')}</div>
                            <div className={classes.LabelValue}>{t('UserProfile:secondSection.names.mobile.3')} :{location ? location.coordinates[0] : null} {t('UserProfile:secondSection.names.mobile.4')} :{location ? location.coordinates[1] : null}</div>
                        </div>
                        <div className={classes.DividerWithoutColor}></div>
                        <div className={classes.ProfileContent}>
                            <div className={classes.Label}>{t('UserProfile:secondSection.names.mobile.5')}</div>
                            <div className={classes.LabelValue}>{number}</div>
                        </div>
                    </div>
                    <div className={classes.DividerWithoutColor}></div>
                    <div className={classes.AboutMe}>
                        <h4>{t('UserProfile:secondSection.title')}</h4>
                        <div className={classes.Divider}></div>
                        <div className={classes.ProfileContent}>
                            <div className={classes.Label}>{t('UserProfile:secondSection.names.0')}</div>
                            <div className={classes.LabelValue}>{street}</div>
                        </div>
                        <div className={classes.DividerWithoutColor}></div>
                        <div className={classes.ProfileContent}>
                            <div className={classes.Label}>{t('UserProfile:secondSection.names.1')}</div>
                            <div className={classes.LabelValue}>{city}</div>
                        </div>
                        <div className={classes.DividerWithoutColor}></div>
                        <div className={classes.ProfileContent}>
                            <div className={classes.Label}>{t('UserProfile:secondSection.names.2')}</div>
                            <div className={classes.LabelValue}>{state}</div>
                        </div>
                        <div className={classes.DividerWithoutColor}></div>
                        <div className={classes.ProfileContent}>
                            <div className={classes.Label}>{t('UserProfile:secondSection.names.3')}</div>
                            <div className={classes.LabelValue}>{zip_code}</div>
                        </div>
                        <div className={classes.DividerWithoutColor}></div>
                        <div className={classes.ProfileContent}>
                            <div className={classes.Label}>{t('UserProfile:secondSection.names.4')}</div>
                            <div className={classes.LabelValue}>{country}</div>
                        </div>
                    </div>
                </div>

                <div className={classes.Others}>
                    <Button buttonType='Submit' clicked={() => this.props.history.push('edit_profile')}><i class="fas fa-edit"></i>{t('UserProfile:button')}</Button>
                </div>
            </React.Fragment>
        }
        return <div className={classes.Profile}>{profileData}</div>
    }
};

UserProfile.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    message: PropTypes.string,
    profile: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        loading: state.profile.loading,
        error: state.profile.error,
        message: state.profile.message,
        profile: state.profile.profile
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetProfile: () => dispatch(actions.getProfile()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation(['translation', 'UserProfile'])(UserProfile));