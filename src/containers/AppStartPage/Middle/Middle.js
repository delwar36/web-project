import React from 'react';
import {useTranslation} from 'react-i18next'
import classes from './Middle.module.css';
import { Slide } from 'react-reveal';
import MiddleItem from './MiddleItem';
import umediad from '../../../assets/videos/video.mp4';
const privilegesList = [
    {
        text: 'Includes advertising media like TV, RADIO, SPORT, PRESS, CINEMA, MUSIC, POSTER, EVENT and more.'
    }, {
        text: 'By this everyone can buy & sell their products.'
    }, {
        text: 'Can search products with current location or maximum area location 250km.'
    }, {
        text: 'Always includes latest and featured advertising products.'
    }, {
        text: 'It spreads the awareness about products and services, broadcasting the benefits of specific products and services, via advertising.'
    }
];
const Middle = () => {
    const {t} = useTranslation()
    // const privilegesList = {t('privilegesList')}
    const privileges = privilegesList.map((item,index) => <MiddleItem text={t(`middle.privilegesList.${index}`)} />);
    return (
        <div className={classes.Middle}>
            <Slide left>
                <div className={classes.Sub}>
                    <h3>{t('middle.name')}</h3>
                    {privileges}
                </div>
            </Slide>
            <Slide right>
                <div className={classes.Sub}>
                    <div className={classes.AppSlide}>
                        <video controls>
                            <source src={umediad} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default Middle;