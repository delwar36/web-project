import React from 'react';
import {withTranslation} from 'react-i18next'
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

import {
    DashboardRounded,
    ExitToApp,
    Home,
    AccountCircle,
    Ballot, ViewList, Inbox, AttachMoneyTwoTone, MonetizationOn, Money, Feedback, People
} from "@material-ui/icons";


class navigationItems extends React.Component {
    render(){
        const { t } = this.props;
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/home">
                <div className={classes.DropMenuStyle} >
                    <Home /><span>{t('Dashboard:DashboardNavigation.0')}</span>
                </div>
            </NavigationItem>
            <NavigationItem link="/profile_dashboard">
                <div className={classes.DropMenuStyle}>
                    <DashboardRounded />
                    <span>{t('Dashboard:DashboardNavigation.1')}</span>
                </div>
            </NavigationItem>
            <NavigationItem link="/my_profile">
                <div className={classes.DropMenuStyle}>
                    <AccountCircle />
                    <span>{t('Dashboard:DashboardNavigation.2')}</span>
                </div>
            </NavigationItem>
            <NavigationItem link="/my_adds" >
                <div className={classes.DropMenuStyle}>
                    <Ballot />
                    <span>{t('Dashboard:DashboardNavigation.3')}</span>
                </div>
            </NavigationItem>
            <NavigationItem link="/my_orders" >
                <div className={classes.DropMenuStyle}>
                    <ViewList />
                    <span>{t('Dashboard:DashboardNavigation.4')}</span>
                </div>
            </NavigationItem>
            <NavigationItem link="/inbox" >
                <div className={classes.DropMenuStyle}>
                    <Inbox />
                    <span>{t('Dashboard:DashboardNavigation.5')}</span>
                </div>
            </NavigationItem>
            <NavigationItem link="/sold" >
                <div className={classes.DropMenuStyle}>
                    <MonetizationOn />
                    <span>{t('Dashboard:DashboardNavigation.6')}</span>
                </div>
            </NavigationItem>
            <NavigationItem link="/my_customers" >
                <div className={classes.DropMenuStyle}>
                    <People />
                    <span>{t('Dashboard:DashboardNavigation.7')}</span>
                </div>
            </NavigationItem>
            <NavigationItem link="/my_earnings" >
                <div className={classes.DropMenuStyle}>
                    <Money />
                    <span>{t('Dashboard:DashboardNavigation.8')}</span>
                </div>
            </NavigationItem>
            <NavigationItem link="/invoices" >
                <div className={classes.DropMenuStyle}>
                    <AttachMoneyTwoTone />
                    <span>{t('Dashboard:DashboardNavigation.9')}</span>
                </div>
            </NavigationItem>
            <NavigationItem link="/feedbacks" >
                <div className={classes.DropMenuStyle}>
                    <Feedback />
                    <span>{t('Dashboard:DashboardNavigation.10')}</span>
                </div>
            </NavigationItem>
            <NavigationItem link="/logout" >
                <div className={classes.DropMenuStyle}>
                    <ExitToApp />
                    <span>{t('Dashboard:ProfiledashboardNavigationItems.2')}</span>
                </div>
            </NavigationItem>
        </ul>
    );
}
}
export default withTranslation()(navigationItems);
