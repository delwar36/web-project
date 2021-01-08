import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import i18next from 'i18next'

import {
    DashboardRounded,
    MonetizationOn,
    Home, ContactMail,
    Info,
    AccountBox,
    AddBox,
    ExitToApp,
    Category,
    Tv,
    Radio,
    NetworkCell,
    Print,
    MusicNote,
    Ballot,
    Event,
    Style,
    Sports,
} from "@material-ui/icons";

class navigationItems extends Component {
    constructor() {
        super();
        let lang = localStorage.getItem("i18nextLng")
        this.state = {
            showMenu: false,
            IconValue: 'fas fa-angle-down',
            selectedValue: lang
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true, IconValue: 'fas fa-angle-up', }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false, IconValue: 'fas fa-angle-down' }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }
    handleChange = (e) => {
        this.setState({
            selectedValue: e.target.value,
        })

        i18next.changeLanguage(e.target.value)
    }

    render() {
        const { t } = this.props;
        const categories = [
            {
                name: t('appStartToolbar.0'),
                path: '/tv',
                icon: <Tv />
            },
            {
                name: t('appStartToolbar.1'),
                path: '/radio',
                icon: <Radio />
            },
            {
                name: t('appStartToolbar.2'),
                path: '/internet',
                icon: <NetworkCell />

            },
            {
                name: t('appStartToolbar.3'),
                path: '/sports',
                icon: <Sports />

            },
            {
                name: t('appStartToolbar.4'),
                path: '/cinema',
                icon: <Tv />

            },
            {
                name: t('appStartToolbar.5'),
                path: '/press',
                icon: <Print />

            },
            {
                name: t('appStartToolbar.6'),
                path: '/music',
                icon: <MusicNote />

            },
            {
                name: t('appStartToolbar.7'),
                path: '/poster',
                icon: <Ballot />

            },
            {
                name: t('appStartToolbar.8'),
                path: '/events',
                icon: <Event />

            },
            {
                name: t('appStartToolbar.9'),
                path: '/styles',
                icon: <Style />
            }
        ]
        return (
            <ul className={classes.NavigationItems}>
                {/* <div className={classes.Divider}></div>
                <div style={{ padding: 4 }}>
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
                <div className={classes.Divider}></div>
                <NavigationItem link="/home">
                    <div className={classes.DropMenuStyle}>
                        <Home /><span>{t('sideDrawer.0')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/start_selling">
                    <div className={classes.DropMenuStyle}>
                        <MonetizationOn />
                        <span>{t('sideDrawer.1')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/profile_dashboard">
                    <div className={classes.DropMenuStyle}>
                        <DashboardRounded />
                        <span>{t('sideDrawer.2')}</span>
                    </div>
                </NavigationItem>
                <div className={classes.Divider}></div>
                <div className={classes.dropButton}>
                    <div className={classes.DropMenuStyle
                    } onClick={this.showMenu}> <Category /><span>{t('appStartToolbar.drawer')}<i className={this.state.IconValue}></i></span></div>
                </div>

                { this.state.showMenu
                    ? (
                        <div className={classes.dropdown}>
                            <div className={classes.dropdownContent}>
                                {categories.map((item, index) => (
                                    <NavigationItem link={`/categories${ item.path }?source=category_tree`}>
                                        <div className={classes.DropMenuStyle} key={index}>
                                            {item.icon}<span>{item.name}</span>
                                        </div>
                                    </NavigationItem>
                                ))}
                            </div>
                        </div>
                    )
                    : null}
                <div className={classes.Divider}></div>
                <NavigationItem link="/login">
                    <div className={classes.DropMenuStyle} onClick={this.props.closeSidebar}>
                        <AccountBox /><span>{t('sideDrawer.3')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/join">
                    <div className={classes.DropMenuStyle} onClick={this.props.closeSidebar}>
                        <AddBox /><span>{t('sideDrawer.4')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/logout" >
                    <div className={classes.DropMenuStyle} onClick={this.props.closeSidebar}>
                        <ExitToApp /><span>{t('sideDrawer.5')}</span>
                    </div>
                </NavigationItem>
                <div className={classes.Divider}></div>
                <NavigationItem link="/contact">
                    <div className={classes.DropMenuStyle} onClick={this.props.closeSidebar}>
                        <ContactMail /><span>{t('sideDrawer.6')}</span>
                    </div>
                </NavigationItem>
                <NavigationItem link="/about">
                    <div className={classes.DropMenuStyle} onClick={this.props.closeSidebar}>
                        <Info /><span>{t('sideDrawer.7')}</span>
                    </div>
                </NavigationItem>
            </ul >
        );
    }

}
export default withTranslation()(navigationItems);

