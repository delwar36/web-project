import React from 'react';
import { useTranslation } from 'react-i18next'
import classes from './ServicesDetails.module.css';
import Aux from '../../../hoc/Aux/Aux';
import ServiceDetailsItem from './ServiceDetailsItem';


const ServicesDetails = () => {

    const { t } = useTranslation()
    let servicesDetailsItems = [
        {
            image: 'https://img.icons8.com/ultraviolet/100/000000/retro-tv.png',
            name: t('servicesDetails.list.0'),
            path: '/tv'
        },
        {
            image: 'https://img.icons8.com/officel/100/000000/radio.png',
            name: t('servicesDetails.list.1'),
            path: '/radio'
        },
        {
            image: 'https://img.icons8.com/clouds/100/000000/internet.png',
            name: t('servicesDetails.list.2'),
            path: '/internet'
        },
        {
            image: 'https://img.icons8.com/officel/100/000000/sports-mode.png',
            name: t('servicesDetails.list.3'),
            path: '/categories/sports'
        },
        {
            image: 'https://img.icons8.com/dusk/100/000000/news.png',
            name: t('servicesDetails.list.4'),
            path: '/newspaper'
        },
        {
            image: 'https://img.icons8.com/dusk/100/000000/film-soundtracks.png',
            name: t('servicesDetails.list.5'),
            path: '/cinema'
        },
        {
            image: 'https://img.icons8.com/office/100/000000/music.png',
            name: t('servicesDetails.list.6'),
            path: '/music'
        },
        {
            image: 'https://img.icons8.com/nolan/100/starred-ticket.png',
            name: t('servicesDetails.list.7'),
            path: '/poster'
        },
        {
            image: 'https://img.icons8.com/dusk/100/000000/social-network.png',
            name: t('servicesDetails.list.8'),
            path: '/social-media'
        },
        {
            image: 'https://img.icons8.com/dusk/100/000000/web-design.png',
            name: t('servicesDetails.list.9'),
            path: '/banner'
        },
    ]
    let list = servicesDetailsItems.map(item => <ServiceDetailsItem  {...item} />);
    // console.log(props.history)
    return (
        <Aux>
            <div className={classes.ServicesDetails}>
                <h3>{t('servicesDetails.name')}</h3>
                <div className={classes.ServicesDetailsMain}>
                    {list}
                </div>
            </div>
        </Aux>
    );
};

export default ServicesDetails;
