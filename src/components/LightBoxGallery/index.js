import React from 'react';
import { NavigateBefore, NavigateNext, Close } from '@material-ui/icons';
import './LightBoxGallery.css';
import { Spinner } from '../UI/Spinner/Spinner';


export const LightBoxGallery = (props) => {
    const [images, setImages] = React.useState(props.images);
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const lastIndex = images.length - 1;
        if (index < 0) setIndex(lastIndex);
        if (index > lastIndex) setIndex(0);
    }, [index, images]);
    // useEffect(() => {
    //     let slider = setInterval(() => {
    //         setIndex(index + 1);
    //     }, 5000);
    //     return () => {
    //         clearInterval(slider);
    //     };
    // }, [index]);
    return <section className="section">
        <div className='Header'>
            <div><h5>{props.boxHeader}</h5></div>
            <div className='closeButton' onClick={props.closed}>  <Close /></div>
        </div>
        {images ?
            <div className="section-center">
                {images.map((image, imageIndex) => {
                    let position = 'nextSlide';
                    if (imageIndex === index) position = 'activeSlide';
                    if (imageIndex === index - 1 || (index === 0 && imageIndex === images.length - 1)) position = 'lastSlide';
                    return <article className={position} key={imageIndex}>
                        <img src={image} alt={image} className="image-img" />
                    </article>
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <NavigateBefore color='primary' />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <NavigateNext color='primary' />
                </button>
            </div>
            : <Spinner />}
    </section>
}
