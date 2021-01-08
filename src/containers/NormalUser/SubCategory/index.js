import React from 'react';
import {useTranslation} from 'react-i18next'
import classes from './SubCategory.module.css';
import { useParams, useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Fade} from 'react-reveal';

export const SubCategory = (props) => {

    const params = useParams();
    const history = useHistory();
    const {t} = useTranslation(['translation','SubCategory'])
    // console.log(props)

    const subCategoryItems = {
        "tv": [
            {
                name: t('SubCategory:tv.0'),
                image: 'https://cdn.pixabay.com/photo/2015/07/02/09/53/set-top-boxes-828550__340.jpg',
                link: '/tv'
            },
            {
                name: t('SubCategory:tv.1'),
                image: 'https://cdn.pixabay.com/photo/2018/08/22/08/39/hongkong-3623118__340.jpg',
                link: '/tv'
            },
            {
                name: t('SubCategory:tv.2'),
                image: 'https://cdn.pixabay.com/photo/2016/01/01/14/42/career-1116593__340.jpg',
                link: '/tv'
            },
            {
                name: t('SubCategory:tv.3'),
                image: 'https://cdn.pixabay.com/photo/2017/08/02/00/03/interior-2568850__340.jpg',
                link: '/tv'
            },
            {
                name: t('SubCategory:tv.4'),
                image: 'https://cdn.pixabay.com/photo/2015/07/02/09/52/roundtable-828546__340.jpg',
                link: '/tv'
            },
            {
                name: t('SubCategory:tv.5'),
                image: 'https://cdn.pixabay.com/photo/2016/01/19/16/49/old-tv-1149416__340.jpg',
                link: '/tv'
            }
        ],
        radio: [
            {
                name: t('SubCategory:radio.0'),
                image: 'https://cdn.pixabay.com/photo/2015/07/02/09/53/set-top-boxes-828550__340.jpg',
                link: '/radio'
            },
            {
                name: t('SubCategory:radio.1'),
                image: 'https://cdn.pixabay.com/photo/2018/08/22/08/39/hongkong-3623118__340.jpg',
                link: '/radio'
            },
            {
                name: t('SubCategory:radio.2'),
                image: 'https://cdn.pixabay.com/photo/2016/01/01/14/42/career-1116593__340.jpg',
                link: '/radio'
            },
        ],
        internet: [
            {
                name: t('SubCategory:internet.0'),
                image: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__340.jpg',
                link: '/internet'
            },
            {
                name: t('SubCategory:internet.1'),
                image: 'https://cdn.pixabay.com/photo/2014/03/22/22/17/twitter-292994__340.jpg',
                link: '/internet'
            },
            {
                name: t('SubCategory:internet.2'),
                image: 'https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813__340.jpg',
                link: '/internet'
            },
            {
                name: t('SubCategory:internet.3'),
                image: 'https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062__340.png',
                link: '/internet'
            },
            {
                name: t('SubCategory:internet.4'),
                image: 'https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815__340.jpg',
                link: '/internet'
            },
        ],
        sports: [
            {
                name: t('SubCategory:sports.0'),
                image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/athletes-1867185__340.jpg',
                link: '/sports'
            },
            {
                name: t('SubCategory:sports.1'),
                image: 'https://cdn.pixabay.com/photo/2018/02/06/14/07/dance-3134828__340.jpg',
                link: '/sports'
            }
        ],
        press: [
            {
                name: t('SubCategory:press.0'),
                image: 'https://cdn.pixabay.com/photo/2017/11/17/09/37/businessman-2956974__340.jpg',
                link: '/press'
            },
            {
                name: t('SubCategory:press.1'),
                image: 'https://cdn.pixabay.com/photo/2016/01/25/01/36/euro-1159935__340.jpg',
                link: '/press'
            },
            {
                name: t('SubCategory:press.2'),
                image: 'https://cdn.pixabay.com/photo/2017/08/11/08/55/shopping-2630045__340.jpg',
                link: '/press'
            },
            {
                name: t('SubCategory:press.3'),
                image: 'https://cdn.pixabay.com/photo/2016/08/15/16/03/newspaper-1595773__340.jpg',
                link: '/press'
            },
            {
                name: t('SubCategory:press.4'),
                image: 'https://cdn.pixabay.com/photo/2018/04/07/08/28/notepad-3297994__340.jpg',
                link: '/press'
            },
            {
                name: t('SubCategory:press.5'),
                image: 'https://cdn.pixabay.com/photo/2015/10/31/17/33/press-1015988__340.jpg',
                link: '/press'
            }
        ],
        cinema: [
            {
                name: t('SubCategory:cinema.0'),
                image: 'https://cdn.pixabay.com/photo/2019/02/21/19/49/seat-4012101__340.jpg',
                link: '/cinema'
            },
            {
                name: t('SubCategory:cinema.1'),
                image: 'https://cdn.pixabay.com/photo/2016/12/28/17/54/columbus-1936633__340.jpg',
                link: '/cinema'
            },
            {
                name: t('SubCategory:cinema.2'),
                image: 'https://cdn.pixabay.com/photo/2016/11/08/05/15/dancer-1807516__340.jpg',
                link: '/cinema'
            },
        ],
        music: [
            {
                name: t('SubCategory:music.0'),
                image: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg',
                link: '/music'
            },
            {
                name: t('SubCategory:music.1'),
                image: 'https://cdn.pixabay.com/photo/2020/09/23/02/01/microphone-5594702__340.jpg',
                link: '/music'
            },
        ],
        poster: [
            {
                name: t('SubCategory:poster.0'),
                image: 'https://cdn.pixabay.com/photo/2014/09/03/20/15/shoes-434918__340.jpg',
                link: '/poster'
            },
            {
                name: t('SubCategory:poster.1'),
                image: 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939__340.jpg',
                link: '/poster'
            },
            {
                name: t('SubCategory:poster.2'),
                image: 'https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463__340.jpg',
                link: '/poster'
            },
            {
                name: t('SubCategory:poster.3'),
                image: 'https://cdn.pixabay.com/photo/2015/05/31/15/07/business-792113__340.jpg',
                link: '/poster'
            },
            {
                name: t('SubCategory:poster.4'),
                image: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/ipad-820272__340.jpg',
                link: '/poster'
            },
            {
                name: t('SubCategory:poster.5'),
                image: 'https://cdn.pixabay.com/photo/2016/11/29/13/17/breakfast-1869772__340.jpg',
                link: '/poster'
            },
            {
                name: t('SubCategory:poster.6'),
                image: 'https://cdn.pixabay.com/photo/2020/08/28/16/17/bust-5524961__340.jpg',
                link: '/poster'
            },
        ]
    }

    // const location = useLocation();
    // const match = useRouteMatch();
    // const query = new URLSearchParams(useLocation().search);
    // query.get('name');
    // < Link to = "/account?name=foo" > Foo User</>
    React.useEffect(() => window.scrollTo(0, 0));
    return (
        <React.Fragment>
            <div className={classes.SubCategory}>
                <br />
                <br />
                {subCategoryItems[params.categoryId] ?
                    <React.Fragment>
                        <h2>{params.categoryId.toUpperCase()}</h2>
                        <span>{t('SubCategory:title')}</span>
                        <div className={classes.Items}>
                            <div className={classes.ItemsLinks}>
                                <h6>{params.categoryId.toUpperCase()}</h6>
                                {subCategoryItems[params.categoryId].map((item, index) => (
                                    <Link to={"/advertise" + item.link}><span key={index}>{item.name}</span></Link>
                                ))}
                            </div>
                            <div className={classes.ItemsCard}>
                                {subCategoryItems[params.categoryId].map((item, index) => (
                                    <Fade delay={500*(index+1)}>
                                        <div className={classes.Card} key={index} onClick={() => history.push('/advertise' + item.link)}>
                                            <img src={item.image} alt={item.name} />
                                            <Link to={"/advertise" + item.link}><p>{item.name}</p></Link>
                                        </div>
                                    </Fade>
                                ))}
                            </div>
                        </div>
                    </React.Fragment>
                    : <h2>{t('SubCategory:others.0')}</h2>
                }
            </div>
        </React.Fragment>
    );
};

