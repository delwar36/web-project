import React from 'react';
import { withTranslation } from 'react-i18next'
import i18next from 'i18next'
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import profileImage from '../../../../assets/images/profileImage.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    DashboardRounded,
    ExitToApp,
} from '@material-ui/icons';

class NavigationItems extends React.Component {
    constructor() {
        super()
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
        // console.log(this.state.selectedValue)
        // console.log(localStorage.getItem("i18nextLng"))
        return (
            <React.Fragment>
                <ul className={classes.NavigationItems}>
                    {
                        this.props.scrolled ? <div className={classes.Search}>
                            <form>
                                <input type="search" placeholder={t('appStartNavigation.00')} />
                                <button><i class="fas fa-search"></i></button>
                            </form>
                        </div>
                            : null
                    }
                    <Link to='/start_selling'>
                        <span style={this.props.scrolled ? {
                            color: 'rgb(92, 104, 104)'
                        } : { color: 'white' }}>{t('appStartNavigation.0')}</span>
                    </Link>
                    {/* {this.props.isAuthenticated ? */}
                        <Link to="/my_profile">
                            <div className={classes.dropdownForUser}>
                                <img src={this.props.user ? this.props.user.profile_image : profileImage} alt='ProfileImage' />
                                <div className={classes.dropdownContentForUser}>
                                    <div className="animate__animated animate__fadeIn">
                                        <NavigationItem link="/profile_dashboard">
                                            <div className={classes.DropMenuStyle}>
                                                <DashboardRounded />
                                                <span>{t('appStartNavigation.1')}</span>
                                            </div>
                                        </NavigationItem>
                                        <NavigationItem link="/logout" >
                                            <div className={classes.DropMenuStyle}>  <ExitToApp /><span>{t('appStartNavigation.2')}</span>
                                            </div>
                                        </NavigationItem>
                                    </div>
                                </div>
                            </div>
                    </Link>
                        {/* : <div className={classes.dropdownForUser}>
                            <img src={profileImage} alt='ProfileImage' />
                        </div>} */}
                    <NavigationItem scrolled={this.props.scrolled} link="/home">{t('appStartNavigation.3')}</NavigationItem>
                    
                        <React.Fragment>
                            <NavigationItem scrolled={this.props.scrolled} link="/join">{t('appStartNavigation.4')}</NavigationItem>
                            <NavigationItem scrolled={this.props.scrolled} link="/login">{t('appStartNavigation.5')}</NavigationItem>
                        </React.Fragment>
                    {/* <span>demoemial@gmail.com</span> */}

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
