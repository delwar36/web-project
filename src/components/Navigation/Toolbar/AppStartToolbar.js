import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from './NavigationItems/AppStartNavigation';
import DrawerToggle from '../SideDrawer/DrawerToggle/AppStartDrawerToggle';

const Toolbar = (props) => {
    const [scrolled, setScrolled] = useState(false);
    const [subHeaderScrolled, setSubHeaderScrolled] = useState(false);
    const { t } = useTranslation()

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }

        if (offset > 200) {
            setSubHeaderScrolled(true);
        } else {
            setSubHeaderScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let sticky = [classes.StickyToolbar];
    if (scrolled) {
        sticky.push(classes.Scrolled);
    }
    const categories = [
        {
            name: t('appStartToolbar.0'),
            path: '/tv'
        },
        {
            name: t('appStartToolbar.1'),
            path: '/radio'
        },
        {
            name: t('appStartToolbar.2'),
            path: '/internet'
        },
        {
            name: t('appStartToolbar.3'),
            path: '/sports'
        },
        {
            name: t('appStartToolbar.4'),
            path: '/cinema'
        },
        {
            name: t('appStartToolbar.5'),
            path: '/press'
        },
        {
            name: t('appStartToolbar.6'),
            path: '/music'
        },
        {
            name: t('appStartToolbar.7'),
            path: '/poster'
        },
        {
            name: t('appStartToolbar.8'),
            path: '/events'
        },
        {
            name: t('appStartToolbar.9'),
            path: '/styles'
        }
    ]
    return (
        <header className={sticky.join(" ")}>
            <DrawerToggle clicked={props.drawerToggleClicked} scrolled={scrolled} />
            <div className={classes.AppHeaderName2} style={{ color: scrolled ? 'goldenrod' : 'white' }}>Media Advertising</div>
            <div className={classes.Logo}>
                <Logo path='/' />
                <div className={classes.AppHeaderName} style={{ color: scrolled ? 'goldenrod' : 'white' }}>Media Advertising</div>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems scrolled={scrolled} />
            </nav>
            {
                subHeaderScrolled ?
                    <div className={classes.SubHeader}>
                        <div className="animate__animated animate__flipInX">
                            <div className={classes.SubHeaderMenu}>
                                {categories.map((item, index) => (
                                    <span key={index} className="animate__animated animate__zoomIn"><Link to={`/categories${ item.path }?source=category_tree`}>{item.name}</Link></span>
                                ))}
                            </div>
                        </div>
                    </div> : null
            }
        </header>

    )
}

export default Toolbar;