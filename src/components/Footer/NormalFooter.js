import React from "react"
import { withTranslation } from "react-i18next"
import classes from "./NormalFooter.module.css"

class index extends React.Component {
	render() {
		const { t } = this.props
		return (
			<div className={classes.Footer}>
				<p className={classes.normal}>
					{t("NormalFooter.0")}
					<br />
					<span className={classes.email}>demo@gmial.com</span>
				</p>
				<a
					href="https://www.facebook.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-facebook-f"></i>
				</a>
				<a
					href="https://www.instagram.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-instagram"></i>
				</a>
			</div>
		)
	}
}

export default withTranslation()(index)
