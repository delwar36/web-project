import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from './NavigationItems/NormalUserNavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let sticky = [classes.Toolbar];
    if (scrolled) {
        sticky.push(classes.Scrolled);
    }

    return <header className={sticky.join(" ")}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.AppHeaderName2}>Umediad</div>
        <div className={classes.Logo}>
            <Logo path='/' />
            <div className={classes.AppHeaderName}>Umediad</div>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
}

export default Toolbar;