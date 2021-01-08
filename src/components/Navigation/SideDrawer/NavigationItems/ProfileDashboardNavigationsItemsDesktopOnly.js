import React, { Component } from 'react';
import {withTranslation} from 'react-i18next'
import classes from './ProfileDashboardNavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

import {
    DashboardRounded,
    ExitToApp,
    Home,
    AccountCircle,
    Ballot, ViewList, Inbox, AttachMoneyTwoTone, MonetizationOn, Money, Feedback, People
} from "@material-ui/icons";


class navigationItems extends Component {
    render() {
        const {t} = this.props
        return (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/home">
                    <div className={classes.Tooltip}>
                        <div><Home /></div>
                        <span className={classes.TooltipText}>{t('Dashboard:DashboardNavigation.0')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/profile_dashboard">
                    <div className={classes.Tooltip}>
                        <div><DashboardRounded /></div>
                        <span className={classes.TooltipText}>{t('Dashboard:DashboardNavigation.1')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/my_profile">
                    <div className={classes.Tooltip}>
                        <div><AccountCircle /></div>
                        <span className={classes.TooltipText}>{t('Dashboard:DashboardNavigation.2')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/my_adds" >
                    <div className={classes.Tooltip}>
                        <div><Ballot /></div>
                        <span className={classes.TooltipText}>{t('Dashboard:DashboardNavigation.3')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/my_orders" >
                    <div className={classes.Tooltip}>
                        <div><ViewList /></div>
                        <span className={classes.TooltipText}>{t('Dashboard:DashboardNavigation.4')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/inbox" >
                    <div className={classes.Tooltip}>
                        <div><Inbox /></div>
                        <span className={classes.TooltipText}>{t('Dashboard:DashboardNavigation.5')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/sold" >
                    <div className={classes.Tooltip}>
                        <div> <MonetizationOn /></div>
                        <span className={classes.TooltipText}>{t('Dashboard:DashboardNavigation.6')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/my_customers" >
                    <div className={classes.Tooltip}>
                        <div><People /></div>
                        <span className={classes.TooltipText}>{t('Dashboard:DashboardNavigation.7')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/my_earnings" >
                    <div className={classes.Tooltip}>
                        <div><Money /></div>
                        <span className={classes.TooltipText}>{t('Dashboard:DashboardNavigation.8')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/invoices" >
                    <div className={classes.Tooltip}>
                        <div><AttachMoneyTwoTone /></div>
                        <span className={classes.TooltipText}>{t('Dashboard:DashboardNavigation.9')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/feedbacks" >
                    <div className={classes.Tooltip}>
                        <div><Feedback /></div>
                        <span className={classes.TooltipText}>{t('Dashboard:DashboardNavigation.10')}</span>
                    </div>
                </NavigationItem>
            </ul>
        );
    }

}
export default withTranslation(['translation','Dashboard'])(navigationItems);

