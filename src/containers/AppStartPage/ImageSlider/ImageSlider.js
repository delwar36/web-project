import React, { Component } from 'react';
import { useTranslation, withTranslation } from 'react-i18next'
import styles from './ImageSlider.module.css';
import { HorizontalSlider } from '../../../components/HorizontalSlider'
import SliderItems from './SliderItem';


class ImageSlider extends Component {

    render() {
        const { t } = this.props
        let sliderItemsObject = [
            {
                value: 'https://www.djaxtech.com/images/products/smarttv.png',
                text: t('imageSlider.list.0'),
                clicked: '/tv'
            },
            {
                value: 'https://cdn.pixabay.com/photo/2016/08/15/16/03/newspaper-1595773_960_720.jpg',
                text: t('imageSlider.list.1'),
                clicked: '/newspaper'
            },
            {
                value: 'https://cdn.pixabay.com/photo/2016/09/20/13/46/radio-1682531_960_720.jpg',
                text: `${ t('imageSlider.list.2') }`,
                clicked: '/radio'
            },
            {
                value: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__340.jpg',
                text: `${ t('imageSlider.list.3') }`,
                clicked: '/internet'
            },
            {
                value: 'https://cdn.pixabay.com/photo/2019/01/31/20/52/web-3967926__340.jpg',
                text: `${ t('imageSlider.list.4') }`,
                clicked: '/website'
            },
            {
                value: ' https://cdn.pixabay.com/photo/2016/06/09/20/38/woman-1446557__340.jpg',
                text: `${ t('imageSlider.list.5') }`,
                clicked: '/social-media'
            },
            {
                value: 'https://images.unsplash.com/photo-1561365375-da699a3ab117?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80',
                text: `${ t('imageSlider.list.6') }`,
                clicked: '/poster'
            },
            {
                value: 'https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790__340.jpg',
                text: `${ t('imageSlider.list.7') }`,
                clicked: '/music'
            },

        ];
        // console.log(sliderItemsObject)

        let list = [];
        sliderItemsObject.map(item => {
            return list.push(<SliderItems value={item.value} text={item.text} clicked={item.clicked} /> )
        })
        // console.log(list)
        return (
            <div className={styles.Slider}>
                <h3 className={styles.Head}>{t('imageSlider.name')}</h3>
                <HorizontalSlider items={list} />
            </div>

        );
    }

};

export default withTranslation()(ImageSlider);
