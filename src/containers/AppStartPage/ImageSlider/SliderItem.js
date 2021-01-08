import React from 'react';
import styles from './ImageSlider.module.css';

const SliderItem = ({ value, text, clicked, history }) => {
    return (
        <div className={styles.AppSlide} onClick={clicked}>
            <img src={value} alt={text} />
            <div className={styles.CenteredItem}>
                <h3>{text}</h3>
            </div>
        </div>
    );
};

export default SliderItem;