import React from 'react';
import { withTranslation } from 'react-i18next'
import i18next from 'i18next'
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import profileImage from '../../../../assets/images/profileImage.png';
import { Link } from 'react-router-dom';
import { DashboardRounded, ExitToApp } from '@material-ui/icons';
import { connect } from 'react-redux';

class NavigationItems extends React.Component {
    constructor(props) {
        super(props)
        let lang = localStorage.getItem("i18nextLng")
        this.state = {
            selectedValue: lang
        }
    }

    handleChange = (e) => {
        this.setState({
            selectedValue: e.target.value,
        })

        i18next.changeLanguage(e.target.value)
    }
    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <ul className={classes.NavigationItems}>
                    <div className={classes.Search}>
                        <form>
                            <input type="search" placeholder={t('appStartNavigation.00')} />
                            <button><i class="fas fa-search"></i></button>
                        </form>
                    </div>
                    <Link to="/my_profile">
                        <div className={classes.dropdownForUser}>
                            <img src={this.props.user ? this.props.user.profile_image : profileImage} alt='ProfileImage' />
                            {/* {this.props.isAuthenticated ? */}
                                <div className={classes.dropdownContentForUser}>
                                    <div className="animate__animated animate__fadeIn">
                                        <NavigationItem link="/profile_dashboard">
                                            <div className={classes.DropMenuStyle}>
                                                <DashboardRounded />
                                                <span>{t('appStartNavigation.1')}</span>
                                            </div>
                                        </NavigationItem>
                                        <NavigationItem link="/logout">
                                            <div className={classes.DropMenuStyle}>  <ExitToApp /><span>{t('appStartNavigation.2')}</span>
                                            </div>
                                        </NavigationItem>

                                    </div>
                            </div>
                                 {/* : null} */}
                        </div>
                    </Link>
                    <NavigationItem scrolled={false} link="/home">{t('appStartNavigation.3')}</NavigationItem>
                    {this.props.isAuthenticated ? null
                        :
                        <React.Fragment>
                            <NavigationItem scrolled={this.props.scrolled} link="/join">{t('appStartNavigation.4')}</NavigationItem>
                            <NavigationItem scrolled={this.props.scrolled} link="/login">{t('appStartNavigation.5')}</NavigationItem>
                        </React.Fragment>
                    }
                    {/* <div style={{ padding: 4 }}>
                        <select
                            style={{ padding: 6 }}
                            className={classes.DownArrow}
                            value={this.state.selectedValue}
                            onChange={this.handleChange}
                        >
                            <option value="en-US">
                                {t('appStartNavigation.6')}
                            </option>
                            <option value="fr">
                                {t('appStartNavigation.7')}
                            </option>
                        </select>
                    </div> */}
                </ul>
            </React.Fragment>
        )
    }
}
// export default navigationItems;

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user,
        isAuthenticated: state.userAuth.token !== null,
    }
};

export default connect(mapStateToProps, null)(withTranslation()(NavigationItems));