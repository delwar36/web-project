import React from 'react';
import {AdvertisingMedia} from '../../assets/images';
import classes from './Logo.module.css';
import { Link } from 'react-router-dom';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <Link to= {props.path}>
            <img src={AdvertisingMedia} alt="Advertising media" />
        </Link>
    </div>
);

export default logo;