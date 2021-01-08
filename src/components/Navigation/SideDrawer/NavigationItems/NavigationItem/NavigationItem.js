import React from 'react';
import classes from './NavigationItem.module.css';

import { NavLink } from 'react-router-dom';


const navigationItem = (props) => (
    <span className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}
        >{props.children}</NavLink>
    </span>
);

export default navigationItem;