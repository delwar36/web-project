import React from 'react';
import classes from './ServicesDetails.module.css';
import { useHistory } from 'react-router-dom';

const ServiceDetailsItem = ({ image, name, path }) => {
    const history = useHistory();
    return (
        <div className={classes.ServicesDetailsMainItem} onClick={() => history.push({
            pathname: '/categories' + path,
            search: 'source=category_tree'
        })}>
            <div> <img src={image} alt={name} /> </div>
            <div className={classes.Divider}></div>
            <div className={classes.HoverDiv}></div>
            <div className={classes.Divider}></div>
            <div> <big>{name}</big></div>
        </div>
    );
};

export default ServiceDetailsItem;