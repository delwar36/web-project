import React from 'react';
import classes from './Advertises.module.css';
import Button from '../../../components/UI/Button/Button';
import { AdvertiseItem } from './AdvertiseItem';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import SimpleSnackbar from '../../../components/Snackbar/Snackbar';
import { Spinner } from '../../../components/UI/Spinner/Spinner';
import { DataLoadError } from '../../../components/UI/DataLoadError';
import { Zoom } from 'react-reveal';
import { img_48 } from '../../../assets/images';

const advertisesData = [
    {
        companyName: 'Channel 24 (Bangladesh)',
        companyDescription: 'Channel 24 is a news channel of Bangladesh. It was launched on 24 May 2012, and is owned by Times Media LTD.',
        companyImage: img_48,
        type: 'Tv',
        subtype: 'Sports and News',
        startingAt: '20',
        rating: 2,
        link: '/single_advertise',
        user: {
            profile_image: img_48,
            full_name: 'Channel 24(Bangladesh)'
        }
    },
    {
        companyName: 'Channel 24 (Bangladesh)',
        companyDescription: 'Channel 24 is a news channel of Bangladesh. It was launched on 24 May 2012, and is owned by Times Media LTD.',
        companyImage: img_48,
        type: 'Tv',
        subtype: 'Sports and News',
        startingAt: '10',
        rating: 1,
        link: '/single_advertise',
        user: {
            profile_image: img_48,
            full_name: 'Channel 24(Bangladesh)'

        }
    },
    {
        companyName: 'Channel 24 (Bangladesh)',
        companyDescription: 'Channel 24 is a news channel of Bangladesh. It was launched on 24 May 2012, and is owned by Times Media LTD.',
        companyImage: img_48,
        type: 'Tv',
        subtype: 'Sports and News',
        startingAt: '40',
        rating: 3,
        link: '/single_advertise',
        user: {
            profile_image: img_48,
            full_name: 'Channel 24(Bangladesh)'

        }
    },
    {
        companyName: 'Channel 24 (Bangladesh)',
        companyDescription: 'Channel 24 is a news channel of Bangladesh. It was launched on 24 May 2012, and is owned by Times Media LTD.',
        companyImage: img_48,
        type: 'Tv',
        subtype: 'Sports and News',
        startingAt: '65',
        rating: 4,
        link: '/single_advertise',
        user: {
            profile_image: img_48,
            full_name: 'Channel 24(Bangladesh)'
        }
    },
    {
        companyName: 'Channel 24 (Bangladesh)',
        companyDescription: 'Channel 24 is a news channel of Bangladesh. It was launched on 24 May 2012, and is owned by Times Media LTD.',
        companyImage: img_48,
        type: 'Tv',
        subtype: 'Sports and News',
        startingAt: '20',
        rating: 5,
        link: '/single_advertise',
        user: {
            profile_image: img_48,
            full_name: 'Channel 24(Bangladesh)'
        }
    }
]
class Advertises extends React.Component {
    state = {
        showSpinner: true
    }
    componentDidMount() {
        if (!this.props.advertisesData) this.props.onfetchAdvertises(this.props.match.params.advertiseType);
        setTimeout(() => {
            this.setState({ showSpinner: false });
        }, 20000);
    }
    render() {
        // let advertisesItemsList = <React.Fragment>
        //     {this.state.showSpinner ?
        //         <Spinner />
        //         :
        //         <DataLoadError text='There are no advertises for this category or an error created.Try again later :)' />}
        // </React.Fragment>
        // if (this.props.advertisesData) {
        let advertisesItemsList = <React.Fragment>
                {/* {this.props.advertisesData.map((advertise, index) =>
                    <Zoom delay={300 * (index + 1)}>
                        <AdvertiseItem key={index} advertise={advertise} />
                    </Zoom>
                )} */}
               {advertisesData.map((advertise, index) =>
                    <Zoom delay={300 * (index + 1)}>
                        <AdvertiseItem key={index} advertise={advertise} />
                    </Zoom>
                )}
                <div className={classes.LoadMore}>
                    <Button buttonType="LoadMore" clicked=""><i class="fas fa-arrow-down"></i><span>LoadMore....</span></Button>
                </div>
            </React.Fragment>
        // }
        return <React.Fragment>
            {this.props.message && !this.props.error ?
                <SimpleSnackbar open={true} message={this.props.message} type='success' height='40' />
                : null
            }
            {this.props.message && this.props.error ?
                <SimpleSnackbar open='true' message={this.props.message} type='error' height='50' />
                : null
            }
            <div className={classes.Advertise}>
                <div className={classes.StartOrFilterProducts}>
                    <h3>What are you looking for? Search or Filter here...</h3>
                    <div className={classes.SearchAndFilter}>
                        <input className={classes.SearchIcon} type="search" placeholder="Search Advertise.." autoFocus />
                        <select className={[classes.DownArrow, classes.FilterIcon].join(' ')}>
                            <option>Newly Added</option>
                            <option>Most Rating</option>
                            <option>Price Descending</option>
                            <option>Price Ascending</option>
                            <option>Nearly 200KM</option>
                        </select>
                    </div>
                </div>
                <div className={classes.BoxRow}> {advertisesItemsList} </div>
            </div>
        </React.Fragment>
    }
};

const mapStateToProps = (state) => {
    return {
        loading: state.normalAdvertise.loading,
        error: state.normalAdvertise.error,
        message: state.normalAdvertise.message,
        advertisesData: state.normalAdvertise.advertisesData,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onfetchAdvertises: (advertiseType) => dispatch(actions.onfetchAdvertises(advertiseType))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Advertises);