import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) =>
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div style={{ background: 'goldenrod' }}></div>
        <div style={{ background: 'goldenrod' }}></div>
        <div style={{ background: 'goldenrod' }}></div>
    </div>

export default drawerToggle;