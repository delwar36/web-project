import React from 'react';
import classes from './NavigationItem.module.css';

import { NavLink } from 'react-router-dom';
// style = { props.scrolled ? { color: 'rgb(86, 110, 110)' } : { color: 'white' } }

const navigationItem = (props) => {
    return (
        <span className={props.scrolled ? classes.OnScrollNavigationItem : classes.NavigationItem} >
            <NavLink
                to={props.link}
                exact={props.exact}
                activeClassName={classes.active}
            >{props.children}</NavLink>
        </span>

    )
}

export default navigationItem;