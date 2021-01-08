import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next'
import Button from '../../../components/UI/Button/Button';
import SpinnerButton from '../../../components/UI/Button/SpinnerButton';
import classes from './Auth.module.css';
import Captcha from 'react-recaptcha';
import FacebookButton from './SocialLoginsButtons/FacebookButton';
import GoogleButton from './SocialLoginsButtons/GoogleButton';
import * as actions from '../../../store/actions/index';
import SimpleSnackbar from '../../../components/Snackbar/Snackbar';
import PropTypes from 'prop-types';
import MyAppleSigninButton from './AppleSignin'

const reCaptchaApiKey = '6LfqitoZAAAAAHjqdjAEv5WAdCScQ6s-wyFfYJbX';
const APP_ID_GOOGLE = '994763187052-04htn5fk31ise9ngh4thfcj3fsopen4h.apps.googleusercontent.com';
const APP_ID_FACEBOOK = '630218267646419';


class SignUp extends Component {
    state = {
        formData: {
            email: {
                value: '',
                valid: false,
                touched: false
            },
            password: {
                value: '',
                valid: false,
                touched: false,
            },
            confirm_password: {
                value: '',
                valid: false,
                touched: false,
            },
        },
        isSignupError: false,
        isCaptchaVerified: false,
        showPassword: false,
        showConfirmPassword: false,
        isSignUp: true,
    }
    handleSocialLogin = (user) => {
        const socialId = user._profile.id;
        const full_name = user._profile.name;
        const profile_image = user._profile.profilePicURL;
        let email = '';
        if (user._profile.email) {
            email = user._profile.email
        }
        const registrationType = 'social';
        const body = JSON.stringify({ socialId, email, full_name, profile_image, registrationType });
        this.props.onAuth(body, this.state.isSignUp);
    }

    handleSocialLoginFailure = (err) => this.setState({ isSignupError: true });

    handlerSubmit = (event) => {
        event.preventDefault();
        const userData = { ...this.state.formData };
        const email = userData['email'].value;
        const password = userData['password'].value;

        if (userData['email'].valid && userData['password'].valid && userData['confirm_password'].valid && this.state.isCaptchaVerified) {
            userData['email'].value = '';
            userData['password'].value = '';
            userData['confirm_password'].value = '';
            this.setState({ formData: userData, isSignupError: false });
            const registrationType = 'normal'
            const body = JSON.stringify({ email, password, registrationType });

            this.props.onAuth(body, this.state.isSignUp);
        } else {
            this.setState({ isSignupError: true });
        }
    }
    reCaptchaLoaded = () => console.log('Captcha loaded successfully');

    verifyCaptcha = (response) => {
        if (response) this.setState({ isCaptchaVerified: true });
    }
    handleInput = (elementType, event) => {
        const userData = { ...this.state.formData };
        userData[elementType].value = event.target.value;
        userData[elementType].touched = true;
        this.setState({ formData: userData });
        this.validate(elementType, event.target.value);
    }

    validate = (elementType, value) => {
        const userData = { ...this.state.formData };
        if (elementType === 'email') {
            const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            userData[elementType].valid = regex.test(value);
            this.setState({ formData: userData });
        }
        if (elementType === 'password') {
            const regex = /^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
            userData[elementType].valid = regex.test(value);
            this.setState({ formData: userData });
        }
        if (elementType === 'confirm_password') {
            let password = userData['password'].value;
            if (password === value) {
                userData[elementType].valid = true;
            } else {
                userData[elementType].valid = false;
            }
            this.setState({ formData: userData });
        }
    }

    handlePasswordVisibility = (eventName) => {
        if (eventName === 'password') this.setState({ showPassword: !this.state.showPassword });
        if (eventName === 'confirm_password') this.setState({ showConfirmPassword: !this.state.showConfirmPassword });
    }

    render() {
        let formData = this.state.formData;
        const { t } = this.props;
        return <React.Fragment>
            <h4>{t('SigninUp:signup.name')}</h4>
            <GoogleButton
                provider='google'
                appId={APP_ID_GOOGLE}
                onLoginSuccess={this.handleSocialLogin}
                onLoginFailure={this.handleSocialLoginFailure} >
                <div className={classes.SocialButton}>
                    <i className="fab fa-google" aria-hidden="true"></i>  <div className={classes.SocialText}>{t('SigninUp:common.0')}</div>
                </div>
            </GoogleButton>
            <FacebookButton
                provider='facebook'
                appId={APP_ID_FACEBOOK}
                onLoginSuccess={this.handleSocialLogin}
                onLoginFailure={this.handleSocialLoginFailure} >
                <div className={classes.SocialButton}>
                    <i className="fab fa-facebook-f" aria-hidden="true"></i><div className={classes.SocialText}>  {t('SigninUp:common.1')} </div>
                </div>
            </FacebookButton>
            <MyAppleSigninButton url="https://macabre-mansion-43001.herokuapp.com/user/apple/register" />
            <h6>{t('SigninUp:common.3')}</h6>
            <form onSubmit={(event) => this.handlerSubmit(event)}>
                <input
                    type='email'
                    value={formData['email'].value}
                    placeholder={t('SigninUp:signup.fields.0')}
                    onChange={(event) => this.handleInput('email', event)} />
                {formData['email'].touched && !formData['email'].valid ?
                    <strong>{t('SigninUp:signup.fields.01')}</strong> : null}
                <div className={classes.Divider}></div>
                <div className={classes.PasswordWrapper}>
                    <input
                        type={this.state.showPassword ? 'text' : 'password'}
                        minLength='8'
                        maxLength='16'
                        placeholder={t('SigninUp:signup.fields.1')}
                        value={formData['password'].value}
                        onChange={(event) => this.handleInput('password', event,)} />
                    {this.state.showPassword ?
                        <i class="fas fa-eye"
                            onClick={(e) => this.handlePasswordVisibility('password')}
                        ></i>
                        :
                        <i class="fas fa-eye-slash"
                            onClick={(e) => this.handlePasswordVisibility('password')}
                        ></i>}
                </div>
                {formData['password'].touched && !formData['password'].valid ? <strong>{t('SigninUp:signup.fields.3')}</strong> : null}
                <div className={classes.Divider}></div>
                <div className={classes.PasswordWrapper}>
                    <input
                        type={this.state.showConfirmPassword ? 'text' : 'password'}
                        minLength='8'
                        maxLength='16'
                        placeholder={t('SigninUp:signup.fields.2')}
                        value={formData['confirm_password'].value}
                        onChange={(event) => this.handleInput('confirm_password', event)} />
                    {this.state.showConfirmPassword ?
                        <i class="fas fa-eye"
                            onClick={(e) => this.handlePasswordVisibility('confirm_password')}
                        ></i>
                        :
                        <i class="fas fa-eye-slash"
                            onClick={(e) => this.handlePasswordVisibility('confirm_password')}
                        ></i>}
                </div>
                {formData['confirm_password'].touched && !formData['confirm_password'].valid ? <strong>{t('SigninUp:signup.fields.21')}</strong> : null
                }
                <div className={classes.Divider}></div>
                <small>{t('SigninUp:signup.fields.4')}</small>
                <div className={classes.Captcha}>
                    <Captcha
                        sitekey={reCaptchaApiKey}
                        render="explicit"
                        onloadCallback={this.reCaptchaLoaded}
                        verifyCallback={this.verifyCaptcha}
                    />
                </div>
                <div className={classes.Divider}></div>
                {this.props.loading ?
                    <div className={classes.SignUpButton}>
                        <SpinnerButton spinSize='17' buttonType='Submit' />
                    </div>
                    :
                    <div className={classes.SignUpButton}>
                        <Button buttonType='Submit' clicked={this.handlerSubmit}><i class="fa fa-paper-plane" aria-hidden="true"></i>
                            {t('SigninUp:signup.fields.5')}</Button>
                    </div>}
                {this.state.isSignupError ? <strong>{t('SigninUp:signup.error')}</strong> : null}
            </form>
        </React.Fragment>
    }
}

SignUp.propTypes = {
    loading: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        loading: state.userAuth.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (body, isSignUp) => dispatch(actions.auth(body, isSignUp)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation(['translation', 'SigninUp'])(SignUp));
