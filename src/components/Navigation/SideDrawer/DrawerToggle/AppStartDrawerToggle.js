import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div style={{ background: props.scrolled ? 'goldenrod' : 'white' }}></div>
        <div style={{ background: props.scrolled ? 'goldenrod' : 'white' }}></div>
        <div style={{ background: props.scrolled ? 'goldenrod' : 'white' }}></div>
    </div>
);

export default drawerToggle;
// goldenrod