import React from 'react';
import { withTranslation } from 'react-i18next'
import img from '../../../assets/images/img3.jpg';
import add_image from '../../../assets/images/add_image.png';
import classes from './StartSelling.module.css';
import Button from '../../../components/UI/Button/Button';
import { Bounce, Fade, Slide } from 'react-reveal';
import { img1, img2, img3, img4 } from '../../../assets/images/user_reviews';
import { UserReviewItem } from './UserReviewItem';
import { HorizontalSlider } from '../../../components/HorizontalSlider';

const JoinCommunity = [
    {
        image: 'https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815__340.jpg',
        text: 'CHANNEL 24.com',
        link: ''
    }, {
        image: 'https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815__340.jpg',
        text: 'CHANNEL 24.com',
        link: ''
    }, {
        image: 'https://cdn.pixabay.com/photo/2017/08/02/00/03/interior-2568850__340.jpg',
        text: 'CHANNEL 24.com',
        link: ''
    }, {
        image: 'https://cdn.pixabay.com/photo/2016/12/28/17/54/columbus-1936633__340.jpg',
        text: 'CHANNEL 24.com',
        link: ''
    }, {
        image: add_image,
        text: 'CHANNEL 24.com',
        link: ''
    }
]
const userReviews = [
    {
        profile: img3,
        name: 'Jennifer Gore, CEO of Weleet',
        reviews: 'Ipsum do aliqua in eu laborum pariatur labore sunt magna eu mollit. Deserunt aliqua ut nulla irure exercitation consequat ut.',
        color: 'gray'
    },
    {
        profile: img3,
        name: 'Sabrina M',
        reviews: 'Ipsum do aliqua in eu laborum pariatur labore sunt magna eu mollit. Deserunt aliqua ut nulla irure exercitation consequat ut.',
        color: 'green'
    },
    {
        profile: img2,
        name: 'Maximillan',
        reviews: 'Ipsum do aliqua in eu laborum pariatur labore sunt magna eu mollit. Deserunt aliqua ut nulla irure exercitation consequat ut.',
        color: 'gold'
    },
    {
        profile: img4,
        name: 'Jennifer Gore, CEO of Weleet',
        reviews: 'Ipsum do aliqua in eu laborum pariatur labore sunt magna eu mollit. Deserunt aliqua ut nulla irure exercitation consequat ut.',
        color: 'blue'
    },


]
class StartSelling extends React.Component {

    render() {
        const list = [];
        userReviews.map((item, index) => (
            list.push(<UserReviewItem
                key={index}
                profile={item.profile}
                name={item.name}
                color={item.color}
                reviews={item.reviews}
            />)))
        const { t } = this.props
        return <div className={classes.StartSelling}>
            <div className={classes.SellingMain}>
                <div className={classes.HeaderImage}>
                    <img src={img} alt='HeaderImage' />
                    <div className={classes.Description}>
                        <h1>{t('StartSelling:above.0')}</h1>
                        <h3>{t('StartSelling:above.1')}</h3>
                        <br />
                        <Button buttonType='Common' clicked={() => this.props.history.push('/subscription-packages')}>{t('StartSelling:above.2')}</Button>
                    </div>
                    <Slide top>
                        <div className={classes.FooterPart}>
                            <div className={classes.FooterItem}>
                                <h4>{t('StartSelling:above.sections.0.00')}</h4>
                                <p>{t('StartSelling:above.sections.0.01')}</p>
                            </div>
                            <div className={classes.FooterItem}>
                                <h4>{t('StartSelling:above.sections.1.10')}</h4>
                                <p>10M+</p>
                            </div>
                            <div className={classes.FooterItem}>
                                <h4>{t('StartSelling:above.sections.2.20')}</h4>
                                <p>$5 - $100</p>
                            </div>
                        </div>
                    </Slide>

                </div>
                <div className={classes.JoinCommunity}>
                    <h3>{t('StartSelling:middle.0')}</h3>
                    <div className={classes.CommunityImage}>
                        {JoinCommunity.map((community, index) => (
                            <Bounce delay={500 * (index + 1)}>
                                <div className={[classes.zoomIn, classes.Frame].join(' ')}>
                                    <img src={community.image} alt='HeaderImage' />
                                    <h4>{community.text}</h4>
                                </div>
                            </Bounce>
                        ))}
                    </div>

                    <div className={classes.HowItWorks}>
                        <h3>{t('StartSelling:below.name')}</h3>
                        <div className={classes.HowItWorksItems}>
                            <Fade delay={0}>
                                <div className={classes.HowItWorksItem}>
                                    <i class="far fa-file-alt"></i>
                                    <div className={classes.Divider}></div>
                                    <h4>{t('StartSelling:below.options.0.00')}</h4>
                                    <div className={classes.Divider}></div>
                                    <p> {t('StartSelling:below.options.0.01')}</p>
                                </div>
                            </Fade>
                            <Fade delay={500}>  <div className={classes.HowItWorksItem}>
                                <i class="fas fa-shipping-fast"></i>
                                <div className={classes.Divider}></div>
                                <h4>{t('StartSelling:below.options.1.10')}</h4>
                                <div className={classes.Divider}></div>
                                <p> {t('StartSelling:below.options.1.11')}</p>
                            </div>
                            </Fade>
                            <Fade delay={1000}>
                                <div className={classes.HowItWorksItem}>
                                    <i class="fas fa-hand-holding-usd"></i>
                                    <div className={classes.Divider}></div>
                                    <h4>{t('StartSelling:below.options.2.20')}</h4>
                                    <div className={classes.Divider}></div>
                                    <p> {t('StartSelling:below.options.2.21')}</p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className={classes.BuyerStories}>
                    <h3>{t('StartSelling:below.stories.name')}</h3>
                    <HorizontalSlider items={list} />
                </div>
                <div className={classes.LetsStart}>
                    <h5>{t('StartSelling:below.others.0')}</h5>
                    <Button buttonType='Common' clicked={() => this.props.history.push('/subscription-packages')}>{t('StartSelling:below.others.1')}</Button>
                </div>
            </div>
        </div>

    };
};

export default withTranslation(['translation', 'StartSelling'])(StartSelling);