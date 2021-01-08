import React from 'react';
import classes from './StartSelling.module.css';
import { Divider, Line } from '../../../components/UI/Spacing';

export const UserReviewItem = ({ profile, name, reviews, color }) =>
    <div className={classes.UserReviewsItem} style={{ borderTop: `4px solid ${ color }` }}>
        <Divider orientation='v' space='2' />
        <div className={classes.UserReviewsItemImage}>
            <img src={profile} alt={name} />
        </div>
        <Divider orientation='v' space='2' />
        <h4>{ name}</h4>
        <Divider orientation='v' space='2' />
        <div className={classes.Reviews}><span>"{reviews}"</span> </div>
    </div>