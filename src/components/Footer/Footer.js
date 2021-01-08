import React from "react"
import { withTranslation } from "react-i18next"
import classes from "./Footer.module.css"
import img from "../../assets/images/advertisingMedia.png"
import { Link } from "react-router-dom"

class index extends React.Component {
	render() {
		const { t } = this.props
		return (
			<footer>
				<div className={classes.Footer}>
					<div className={classes.AppInfo}>
						<img src={img} alt="Media Advertising" />
						<Link to=''><small>{t('footer.firstSection.0')}</small></Link>
						<div className={classes.Divider}></div>
						<h6>{t('footer.firstSection.1')}</h6>
					</div>
					<div className={classes.About}>
						<h6>{t('footer.secondSection.0')}</h6>
						<div className={classes.Divider}></div>
						<Link to="">
							<small>{t('footer.secondSection.1')}</small>
						</Link>
						<div className={classes.Divider1}></div>
						<Link to="">
							<small>{t('footer.secondSection.2')}</small>
						</Link>
						<div className={classes.Divider1}></div>
						<Link to="">
							<small>{t('footer.secondSection.3')}</small>
						</Link>
						<div className={classes.Divider1}></div>
						<Link to="">
							<small>{t('footer.secondSection.4')}</small>
						</Link>
						<div className={classes.Divider1}></div>
						<Link to="">
							<small>{t('footer.secondSection.5')}</small>
						</Link>
						<div className={classes.Divider1}></div>
						<Link to="">
							<small>{t('footer.secondSection.6')}</small>
						</Link>
					</div>
					<div className={classes.Terms}>
						<h6>{t('footer.thirdSection.0')}</h6>
						<div className={classes.Divider}></div>
						<Link to="">
							<small>{t('footer.thirdSection.1')}</small>
						</Link>
						<div className={classes.Divider1}></div>
						<Link to="">
							<small> {t('footer.thirdSection.2')}</small>
						</Link>
						<div className={classes.Divider1}></div>
						<Link to="">
							<small> {t('footer.thirdSection.3')}</small>
						</Link>
						<div className={classes.Divider1}></div>
						<Link to="">
							<small> {t('footer.thirdSection.4')}</small>
						</Link>
						<div className={classes.Divider1}></div>
						<Link to="">
							<small> {t('footer.thirdSection.5')}</small>
						</Link>
					</div>
					<div className={classes.Social}>
						<h6>{t('footer.forthSection.0')}</h6>
						<div className={classes.Divider}></div>
						<p className={classes.normal}>{t('footer.forthSection.1')}</p>
						<div className={classes.Divider1}></div>
						<span className={classes.email}>demo@gmial.com</span>
					</div>
				</div>
				<div className={classes.DividerLine}></div>
				<div className={classes.FooterBottom}>
                <div className={classes.socialMedia}>
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://mobile.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/showcase" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a></li>
                </div>
            </div>
			</footer>
		)
	}
}

export default withTranslation()(index)
