import React from "react"
import { useTranslation, withTranslation } from "react-i18next"

import i18next from 'i18next'
// function Test() {
//     const { t, i18n } = useTranslation()
// 	function handleClick(lang) {
// 		i18n.changeLanguage(lang)
// 	}
// 	return (
// 		<div style={{ padding: 20, marginTop: 100 }}>
// 			<button onClick={()=>handleClick('en')}>en</button>
// 			<button onClick={()=>handleClick('fr')}>fr</button>
// 			<h1>{t('hello.1')}</h1>
//             <h1>{t('hello.2')}</h1>
// 		</div>
// 	)
// }

// export default Test

class Test extends React.Component {
    handleClick(lang) {
        i18next.changeLanguage(lang)
    }
	render() {
        const {t} = this.props
        // console.log(t)
		return (
			<div style={{ padding: 20, marginTop: 100 }}>
				<button onClick={() => this.handleClick("en-US")}>en</button>
				<button onClick={() => this.handleClick("fr")}>fr</button>
				<h1>{t("hello.1")}</h1>
				<h1>{t("hello.2")}</h1>
			</div>
		)
	}
}

export default withTranslation()(Test)