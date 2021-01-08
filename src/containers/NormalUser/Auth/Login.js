import React, { Component } from "react"
import { connect } from "react-redux"
import { withTranslation } from 'react-i18next'
// import scriptjs from "scriptjs"
import Button from "../../../components/UI/Button/Button"
import SpinnerButton from "../../../components/UI/Button/SpinnerButton"
import classes from "./Auth.module.css";
import { Link } from "react-router-dom"
import FacebookButton from "./SocialLoginsButtons/FacebookButton"
import GoogleButton from "./SocialLoginsButtons/GoogleButton"
import * as actions from "../../../store/actions/index"
import MyAppleSigninButton from "./AppleSignin"

const APP_ID_GOOGLE =
	"994763187052-04htn5fk31ise9ngh4thfcj3fsopen4h.apps.googleusercontent.com"
const APP_ID_FACEBOOK = "630218267646419"

// scriptjs.get(
// 	"https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
// 	() => {
// 		const params = {
// 			clientId: "app.umediad.com",
// 			redirectURI: "http://fb540b0dee03.ngrok.io/user/apple/login",
// 			scope: "name email"
// 		}
// 		console.log(params)
// 		window.AppleID.auth.init(params)
// 	}
// )

class Login extends Component {
	state = {
		formData: {
			email: {
				value: "",
				valid: false,
				touched: false,
			},
			password: {
				value: "",
				valid: false,
				touched: false,
			},
		},
		isSignup: false,
		showPassword: false,
		isLoginError: false,
	}

	handleInput = (elementType, event) => {
		const userData = { ...this.state.formData }
		userData[elementType].value = event.target.value
		userData[elementType].touched = true
		this.setState({ formData: userData })
		this.validate(elementType, event.target.value)
	}

	validate = (elementType, value) => {
		const userData = { ...this.state.formData }
		if (elementType === "email") {
			const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
			userData[elementType].valid = regex.test(value)
			this.setState({ formData: userData })
		}
	}
	handlePasswordVisibility = () => this.setState({ showPassword: !this.state.showPassword })
	handleSocialLogin = (user) => {
		const socialId = user._profile.id
		const loginType = "social"
		const body = JSON.stringify({ socialId, loginType })
		this.props.onAuth(body, this.state.isSignUp)
	}
	handleSocialLoginFailure = (err) => this.setState({ isLoginError: true })
	handlerSubmit = (event) => {
		event.preventDefault()
		const userData = { ...this.state.formData }
		const email = userData["email"].value;
		const password = userData["password"].value;
		if (userData["email"].valid && userData["password"].value) {
			userData["email"].value = "";
			userData["password"].value = "";
			this.setState({ formData: userData, isLoginError: false });
			const loginType = "normal";
			const body = JSON.stringify({ email, password, loginType });

			this.props.onAuth(body, this.state.isSignUp);
		} else {
			this.setState({ isLoginError: true })
		}
	}
	render() {
		let formData = this.state.formData
		const { t } = this.props
		return <React.Fragment>
			<h4>{t('SigninUp:signin.name')}</h4>
			<GoogleButton
				provider="google"
				appId={APP_ID_GOOGLE}
				onLoginSuccess={this.handleSocialLogin}
				onLoginFailure={this.handleSocialLoginFailure}
			>
				<div className={classes.SocialButton}>
					<i className="fab fa-google" aria-hidden="true"></i>{" "}
					<div className={classes.SocialText}>{t('SigninUp:common.0')}</div>
				</div>
			</GoogleButton>
			<FacebookButton
				provider="facebook"
				appId={APP_ID_FACEBOOK}
				onLoginSuccess={this.handleSocialLogin}
				onLoginFailure={this.handleSocialLoginFailure}
			>
				<div className={classes.SocialButton}>
					<i className="fab fa-facebook-f" aria-hidden="true"></i>
					<div className={classes.SocialText}>
						{t('SigninUp:common.1')}
					</div>
				</div>
			</FacebookButton>
			<MyAppleSigninButton url="https://macabre-mansion-43001.herokuapp.com/user/apple/login" />
			<form onSubmit={(event) => this.handlerSubmit(event)}>
				<h6>{t('SigninUp:common.3')}</h6>
				<div className={classes.Divider}></div>
				<input
					type="email"
					value={formData["email"].value}
					placeholder={t('SigninUp:signin.fields.0')}
					onChange={(event) => this.handleInput("email", event)}
				/>
				{formData["email"].touched && !formData["email"].valid ? <strong>Provide a valid email</strong> : null}
				<div className={classes.Divider}></div>
				<div className={classes.PasswordWrapper}>
					<input
						value={formData["password"].value}
						type={this.state.showPassword ? "text" : "password"}
						minLength="8"
						maxLength="16"
						placeholder={t('SigninUp:signin.fields.1')}
						onChange={(event) => this.handleInput("password", event)}
					/>
					{this.state.showPassword ?
						<i className="fas fa-eye" onClick={this.handlePasswordVisibility}></i> :
						<i className="fas fa-eye-slash" onClick={this.handlePasswordVisibility}
						></i>}
				</div>
				<div className={classes.Divider}></div>
				{this.props.loading ?
					<SpinnerButton spinSize="17" buttonType="Submit" />
					: <Button buttonType="Submit" clicked={this.handlerSubmit}>
						<i class="fa fa-paper-plane" aria-hidden="true"></i>
						{t('SigninUp:signin.0')}
					</Button>}
				{this.state.isLoginError ? <strong>{t('SigninUp:signin.error')}</strong> : null}
				<div className={classes.ModalFooter}>
					<Link to="forgot_password">{t('SigninUp:signin.1')}</Link>
				</div>
			</form>
		</React.Fragment>
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.userAuth.loading,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAuth: (body, isSignUp) => dispatch(actions.auth(body, isSignUp)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation(['translation', 'SigninUp'])(Login))
