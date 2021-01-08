import React from "react"
import { withTranslation } from 'react-i18next'
import classes from "../CreateAdd.module.css"

class StepProgress extends React.Component {
	render() {
		const { step, t } = this.props;
		const progressItems = [
			{
				text: t('MyAds:CreateAdd.StepProgress.0')
			},
			{
				text: 'Audience and Visibility'
			},
			{
				text: t('MyAds:CreateAdd.StepProgress.1')
			},
			{
				text: t('MyAds:CreateAdd.StepProgress.2')
			},
			{
				text: t('MyAds:CreateAdd.StepProgress.3')
			},
			{
				text: t('MyAds:CreateAdd.StepProgress.4')
			}
		]
		return <div className={classes.Progress}>
			{progressItems.map((progress, index) => (
				<div className={classes.ProgressItemStyle}>
					<div className={classes.ProgressColumn}>
						<div className={step >= index + 1 ? classes.ProgressColumnTextActive : classes.ProgressColumnText}>
							<strong>{progress.text}</strong>
						</div>
						<div className={classes.ProgressItem}>
							<div className={step >= index + 1 ? classes.CircleActive : classes.Circle}>
								<small>{index + 1}</small>
							</div>
							<div className={step >= index + 1 ? classes.LineActive : classes.Line}></div>
						</div>
					</div>
				</div>
			))}
		</div>
	}
}

export default withTranslation(['translation', 'MyAds'])(StepProgress)