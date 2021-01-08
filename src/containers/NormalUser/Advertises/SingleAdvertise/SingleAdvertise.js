import React, { Component } from 'react';
import classes from './SingleAdvertise.module.css';
import Button from '../../../../components/UI/Button/Button';
import Input from '../../../../components/UI/Input/Input';
import { img2 } from '../../../../assets/images/user_reviews';
import Tabs from '../../../../components/Tabs/Tabs';
import '../../../../components/Tabs/Tabs.css';
import * as actions from '../../../../store/actions'
import { connect } from 'react-redux';
import { Modal } from '../../../../components/UI/Modal';
import { LightBoxGallery } from '../../../../components/LightBoxGallery';
import { Spinner } from '../../../../components/UI/Spinner/Spinner';
import { DataLoadError } from '../../../../components/UI/DataLoadError';
import { getDate, getTime } from '../../../../shared/utility';
import SimpleSnackbar from '../../../../components/Snackbar/Snackbar';
import CryptoJS from 'crypto-js';

const allowedImageTypes = ['jpg', 'jpeg', 'png', 'gif'];
const HeadingText = ({ heading, value }) => {
    return <div className={classes.HeadingText}>
        <span>{heading}</span>
        <small>{value}</small>
    </div>
}


class SingleAdvertise extends Component {
    state = { showModal: false, showSpinner: true }
    openModal = () => this.setState({ showModal: true });
    closeModal = () => this.setState({ showModal: false });
    componentDidMount() {
        if (!this.props.singleAdvertiseData) this.props.onfetchSingleAdvertise(this.props.match.params.advertiseId);

        setTimeout(() => {
            this.setState({ showSpinner: false });
        }, 20000);
    }
    getFileType = (file) => file.split('.', 2)[1].toLowerCase();
    handlePurchaseAdvertise = (packageType) => {
        if (this.props.isAuthenticated) {
            this.props.onPurchaseAdvertise({
                advertiseId: this.props.match.params.advertiseId, packageType
            });
        } else {
            this.props.history.push('/login');
        }
    }
    render() {
        const history = this.props.history.location.pathname.split('/');
        const advertiseId = history[3];
        const referralCode = history[4];
        if (referralCode) localStorage.setItem("employee", JSON.stringify({ advertiseId: advertiseId, referralCode: referralCode }));
        console.log(localStorage.getItem('employee'))
        let singleAdvertiseItem = <React.Fragment>
            {this.state.showSpinner ? <Spinner /> : <DataLoadError text='An error created.Try again later :)' />}
        </React.Fragment>
        if (this.props.singleAdvertiseData) {
            const { advertise: { type, subtype, title, description, rating, files, createdAt, packages } } = this.props.singleAdvertiseData;
            const ratings = [];
            const Icon = <i className="fas fa-star"></i>;
            for (let i = 0; i < parseInt(rating); i++) {
                ratings.push(Icon);
            }
            const { profile: { country, street, state, city, contact_number, zip_code } } = this.props.singleAdvertiseData;
            const { profile: { user: { full_name, profile_image, email, } } } = this.props.singleAdvertiseData;
            const images = [];
            singleAdvertiseItem = <React.Fragment>
                <div className={classes.AdvertiseDescription}>
                    <div className={classes.AdvertiseItems}>
                        <span>Advertise full description</span>
                        <div className={classes.Divider}></div>
                        <div className={classes.PartLeft}>
                            <HeadingText heading='Type' value={type} />
                            <HeadingText heading='Subtype' value={subtype} />
                            <HeadingText heading='Title' value={title} />
                            <HeadingText heading='About the Ad' value={description} />
                            <HeadingText heading='Issue Date' value={getTime(createdAt) + ' ' + getDate(createdAt)} />
                            <HeadingText heading='Rating' value={ratings} />
                        </div>
                        <div className={classes.PartRight}>
                            <React.Fragment>
                                <span>Featured files</span>
                                <div className={classes.Divider}></div>
                                <div className={classes.AdvertiseImageFiles}>
                                    {files.map((file, index) => {
                                        let imageItem = null;
                                        if (allowedImageTypes.findIndex(type => type === this.getFileType(file)) !== -1) {
                                            images.push(file);
                                            imageItem = <img
                                                onClick={this.openModal}
                                                key={index}
                                                src={file}
                                                alt='advertise file' />
                                        }
                                        return <div>{imageItem}</div>
                                    })}
                                </div>
                                <div className={classes.Divider}></div>
                                <div className={classes.AdvertiseVideoFiles}>
                                    {files.length > 0 && this.getFileType(files[files.length - 1]) === 'mp4' ?
                                        <video controls>
                                            <source
                                                src={files[files.length - 1]}
                                                type="video/mp4">
                                            </source>
                                        </video> : null}
                                </div>
                            </React.Fragment>
                        </div>
                    </div>
                    <div className={classes.AdvertisePackages}>
                        <span>Packages</span>
                        <div className={classes.Divider}></div>
                        <Tabs>
                            {packages.map((packageData, index) => (
                                <div label={packageData.type.charAt(0).toUpperCase() + packageData.type.slice(1).toLowerCase()} key={index}>
                                    <div className={classes.Content}>
                                        <div className={classes.Header}>
                                            <p>{packageData.type}</p>
                                            <p>${packageData.price}</p>
                                        </div>
                                        <div className={classes.DividerWithoutColor}></div>
                                        <span>{packageData.name}</span>
                                        <br />
                                        <small>{packageData.description}</small>
                                        <br />
                                        <br />
                                        <div className={classes.PackageDescription}>
                                            <i class="far fa-clock"></i><span><h5>{packageData.delivery_time}{packageData.delivery_type} Confirm</h5></span>
                                        </div>
                                        <div className={classes.DividerWithoutColor}></div>
                                        {packageData.tasks.map((task, index) => (
                                            <React.Fragment>
                                                <div className={classes.PackageDescription}>
                                                    <i class="fas fa-check"></i><small key={index}>{task}</small>
                                                </div>
                                                <br />
                                            </React.Fragment>
                                        ))}
                                        <Button buttonType='Submit' clicked={() => this.handlePurchaseAdvertise(packageData.type)}>Continue(${packageData.price})</Button>
                                    </div>
                                </div>
                            ))}
                        </Tabs>
                    </div>
                    <Modal type='lightbox' show={this.state.showModal}
                        modalClosed={this.closeModal}>
                        <LightBoxGallery images={images} boxHeader='Featured Photos' closed={this.closeModal} />
                    </Modal>
                </div>
                <div className={classes.UserDescription}>
                    <span>Company full description</span>
                    <div className={classes.Divider}></div>
                    <HeadingText heading='Company name' value={full_name} />
                    <HeadingText heading='About our company' value={this.props.singleAdvertiseData.profile.description} />
                    <HeadingText heading='Street' value={street} />
                    <HeadingText heading='State' value={state} />
                    <HeadingText heading='City' value={city} />
                    <HeadingText heading='Zip code' value={zip_code} />
                    <HeadingText heading='Country' value={country} />
                    <HeadingText heading='Our Contact number' value={contact_number.split('$', 2)[0] + '' + contact_number.split('$', 2)[1]} />
                    <HeadingText heading='Our official email' value={email} />
                    <HeadingText heading='Company Logo/Profile' value={null} />
                    <img src={profile_image} alt='company profile' />
                </div>
            </React.Fragment>
        }
        return <React.Fragment>
            {this.props.message && !this.props.error ?
                <SimpleSnackbar open={true} message={this.props.message} type='success' height='50' />
                : null
            }
            {this.props.message && this.props.error ?
                <SimpleSnackbar open='true' message={this.props.message} type='error' height='50' />
                : null
            }
            <div className={classes.SingleAdvertise}>{singleAdvertiseItem}</div>
            <div className={classes.Specification}>
                <div className={classes.SpecificationStyle}>
                    <h4>Advertise Specification</h4>
                    {this.props.singleAdvertiseData ?
                        this.props.singleAdvertiseData.advertise.specification.map((specification, index) => (
                            <React.Fragment>
                                <small> {specification.rule}</small>
                                {this.props.singleAdvertiseData.advertise.specification.length - 1 > index ?
                                    <div className={classes.Divider}></div>
                                    : null}
                            </React.Fragment>
                        )) : null}
                </div>
            </div>
            <div className={classes.Others}>
                <div className={classes.ReviewsAndRating}>
                    <h4>Reviews And Ratings</h4>
                    <div className={classes.Ratings}>
                        <div className={classes.R1}>
                            <big>Ratings</big>
                            <div className={classes.DividerWithoutColor}></div>
                            <h3>4.2 <span>/ 5</span></h3>
                            <div className={classes.DividerWithoutColor}></div>
                            <span> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></span>
                            <br />
                            <small>201 Ratings</small>
                        </div>
                        <div className={classes.R2}>
                            <div className={classes.RatingsDescription}>
                                <div className={classes.RD1}>
                                    <span> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></span>
                                </div>
                                <div className={classes.RD2}>
                                    <div className={classes.RatingCount}>
                                        <div className={classes.RatingCountValue1}></div>
                                    </div>
                                    120
                                </div>
                            </div>
                            <div className={classes.RatingsDescription}>
                                <div className={classes.RD1}>
                                    <span> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                                </div>
                                <div className={classes.RD2}>
                                    <div className={classes.RatingCount}>
                                        <div className={classes.RatingCountValue2}></div>
                                    </div>
                                    50
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <big>Reviews(2)</big>
                    <div className={classes.Reviews}>
                        <div className={classes.ReviewsDescription}>
                            <div className={classes.Profile}>
                                <img src={img2} alt='Profile' />
                                <div className={classes.ProfileNameAndDate}>
                                    <p>Dyna keujee</p>
                                    <small>2 Jan,2020</small>
                                </div>
                            </div>
                            <span> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                            <br />
                            <small> The material should be translated into the languages that the campaign is to take place in upon delivery.</small>
                        </div>
                        <div className={classes.ReviewsDivider}></div>
                        <div className={classes.ReviewsDescription}>
                            <div className={classes.Profile}>
                                <img src={img2} alt='Profile' />
                                <div className={classes.ProfileNameAndDate}>
                                    <p>Maxximilan</p>
                                    <small>2 Jan,2020</small>
                                </div>
                            </div>
                            <span> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i> </span>
                            <br />
                            <small> The material should be translated into the languages that the campaign is to take place in upon delivery.</small>
                        </div>
                    </div>
                    <br />
                    <h5>Give your Reviews</h5>
                    <Input elementType='textarea' />
                    <Button buttonType='Common'>Submit</Button>
                </div>
            </div>
        </React.Fragment>
    }
};

const mapStateToProps = (state) => {
    return {
        loading: state.normalAdvertise.loading,
        error: state.normalAdvertise.error,
        message: state.normalAdvertise.message,
        singleAdvertiseData: state.normalAdvertise.singleAdvertiseData,
        isAuthenticated: state.userAuth.isAuthenticated
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onfetchSingleAdvertise: (advertiseId) => dispatch(actions.onfetchSingleAdvertise(advertiseId)),
        onPurchaseAdvertise: (body) => dispatch(actions.onPurchaseAdvertise(body))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleAdvertise);