import React from 'react';
import { Zoom } from 'react-reveal';
import classes from './Advertises.module.css';
import { useHistory, Link } from 'react-router-dom';

export const AdvertiseItem = ({ advertise }) => {
    const ratings = [];
    const Icon = <i className="fas fa-star"></i>;
    for (let i = 0; i < parseInt(advertise.rating); i++) {
        ratings.push(Icon);
    }
    const history = useHistory();

    return <Zoom>
        <div className={classes.BoxRowElement} onClick={() => history.push(`/advertise/description/${ advertise._id }`)}>
            <div className={classes.CardHeader}>
                <div className={classes.ProvidedBy}>{advertise.user.full_name}</div>
                <div className={classes.CardBackgroundImg}>
                    <img src={advertise.companyImage} alt='advertiseImg' />
                </div>
                <div className={classes.CardUserImg}>
                    <img src={advertise.user.profile_image} alt='userImg' />
                </div>
            </div>
            <div className={classes.BoxRowElementItems}>
                <h6>{advertise.type}</h6>
                <span>{advertise.subtype}</span>
                <Link to='/'><h6>{advertise.title}</h6></Link>
                <div className={classes.CompanyDescription}>
                    <small>{advertise.companyDescription.trim().substr(0, 60)}..</small>
                </div>
                <div className={classes.PriceAndRating}>
                    <span>Starting At : {advertise.startingAtPrice}$</span>
                    <span>Ratting : {ratings}</span>
                </div>
            </div>
        </div>
    </Zoom>
};