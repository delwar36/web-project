import React from "react"
import {useTranslation} from 'react-i18next'
import AppleSignin from "react-apple-signin-auth"
import Button from "../../../components/UI/Button/Button"
import classes from "./Auth.module.css"

/** Apple Signin button */
const MyAppleSigninButton = (props) => {
  //{...rest}
  const {t} = useTranslation(['translation','SigninUp'])
  return(
	<AppleSignin
		authOptions={{
			clientId: "app.umediad.com",
			scope: "email name",
			redirectURI: props.url,
			//   redirectURI: 'http://fb540b0dee03.ngrok.io/user/apple/register',
			state: "",
			nonce: "nonce",
			usePopup: true,
		}}
		uiType="dark"
		render={(props) => {
      // console.log(props.children.props.children[1])
      return(
			<div {...props}>
				<Button buttonType="AppleDark">
					<div className={classes.SocialButton}>
						<i className="fab fa-apple" aria-hidden="true"></i>
						<div className={classes.SocialText}>
							{/* {props.children.props.children[1]} */}
							{t('SigninUp:common.2')}
						</div>
					</div>
				</Button>
			</div>
      )
    }}
		// {...rest}
	/>
  )
}

export default MyAppleSigninButton
