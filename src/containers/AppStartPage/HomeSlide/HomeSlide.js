import React from 'react';
import {useTranslation} from 'react-i18next'
import styles from './HomeSlide.module.css';
import classes from './HomeSlide.module.css';

const HomeSlide = () => {
    const { t } = useTranslation();
    return (
        <React.Fragment>
            <div className={styles.AppSlide}>
                <div className={classes.slide1}></div>
                <div className={classes.slide2}></div>
                <div className={classes.slide3}></div>
                <div className={classes.slide4}></div>
                <div className={classes.TransparentBackground}>
                    <div className={classes.Description}>
                        <h1 className="animate__animated animate__lightSpeedInLeft">{(t('homeSlide.000'))}</h1>
                        <div className={classes.DividerForMobile}></div>
                        <h2 className="animate__animated animate__fadeInRight">{t('homeSlide.0')}</h2>
                        <div className={classes.DividerForMobile}></div>
                        <div className={classes.DividerForDesktop}></div>
                        <div className={classes.Search}>
                            <form className="animate__animated animate__fadeInUpBig">
                                <input type="search" placeholder={(t('homeSlide.00'))} />
                                <button><i class="fas fa-search"></i></button>
                            </form>
                            <div className={classes.DividerForDesktop}></div>
                            <div className={styles.FavoriteService}>
                                <h5>{t('homeSlide.1')} :</h5> <p>{t('homeSlide.8')}</p><p>{t('homeSlide.2')}</p>  <p>{t('homeSlide.3')}</p><p>{t('homeSlide.4')}</p>
                                <p>{t('homeSlide.5')}</p>  <p>{t('homeSlide.6')}</p>  <p>{t('homeSlide.7')}</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.DividerForMobile}></div>
                    <div className={classes.DividerForMobile}></div>
                    <br />
                    <div className={styles.MobileFavoriteService}>
                        <h5>{t('homeSlide.1')} :</h5> <p>{t('homeSlide.8')}</p><p>{t('homeSlide.2')}</p>  <p>{t('homeSlide.3')}</p><p>{t('homeSlide.4')}</p>
                        <p>{t('homeSlide.5')}</p>  <p>{t('homeSlide.6')}</p>  <p>{t('homeSlide.7')}</p>
                    </div>
                </div>

            </div>
            <div className={styles.MobileSearch}>
                <br />
                <form className="animate__animated animate__fadeInUpBig">
                    <input type="search" placeholder="Search services" />
                    <button><i class="fas fa-search"></i></button>
                </form>
            </div>

            <p><marquee>{t('info.0')}</marquee></p>
            <br />
        </React.Fragment>
    );

};

export default HomeSlide;
