import React, { Component } from 'react';
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import classes from './EditProfile.module.css';
import { AddAPhoto } from '@material-ui/icons';
import Autocomplete from '../../../components/AutoComplete/AutoComplete';
import { countryData } from '../../../shared/utils';
import './AutocompleteStyles.css';
import * as actions from '../../../store/actions/index';
import PropTypes from 'prop-types';
import SimpleSnackbar from '../../../components/Snackbar/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const GOOGLE_MAP_API_KEY = 'AIzaSyB744oAeY0-F_1OSlGHlwm9pRs6b4WFxJ0';

function CircularProgressWithLabel(props) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary">{
                    props.value}%</Typography>
            </Box>
        </Box>
    );
}

class EditProfile extends Component {
    state = {
        formData: {
            full_name: '',
            gender: '',
            age: '',
            description: '',
            cover_photo: null,
            profile_photo: null,
            country: '',
            contact_number: '',
            street: '',
            state: '',
            city: '',
            zip_code: ''
        },
        coordinates: {
            latitude: null,
            longitude: null,
        },
        existingFiles: {
            cover_photo: null,
            profile_photo: null,
        },
        have_social_profile: false,
        coverPhotoPreview: null,
        profilePhotoPreview: null,
        coverPhotoSizeError: false,
        profilePhotoSizeError: false,
        userAddress: null,
        code: '',
        codeError: false,
        ageError: false,
        formError: false
    }

    UNSAFE_componentWillMount() {
        if (!this.props.profile) this.props.onGetProfile();
    }
    componentDidMount() {
        if (this.props.profile) {
            const { gender, age, description, country, contact_number, street, state, city, zip_code, location, cover_photo, user } = this.props.profile;
            const { full_name, profile_image, have_social_profile } = user;

            let formData = { ...this.state.formData };

            formData['full_name'] = full_name;
            formData['gender'] = gender;
            formData['age'] = age;
            formData['description'] = description;
            formData['country'] = country;
            formData['contact_number'] = contact_number ? contact_number.split('$', 2)[1] : null;
            formData['street'] = street;
            formData['state'] = state;
            formData['city'] = city;
            formData['zip_code'] = zip_code;

            const coordinates = { ...this.state.coordinates };
            coordinates['latitude'] = location ? location.coordinates[0] : null;
            coordinates['longitude'] = location ? location.coordinates[1] : null;

            const existingFiles = { ...this.state.existingFiles };
            existingFiles['cover_photo'] = cover_photo;
            existingFiles['profile_photo'] = profile_image;

            this.setState({
                formData: formData,
                coordinates: coordinates,
                code: contact_number ? contact_number.split('$', 2)[0] : null,
                have_social_profile: have_social_profile,
                existingFiles: existingFiles,
                coverPhotoPreview: cover_photo,
                profilePhotoPreview: profile_image,
            });
        }
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
            alert('Geolocation is not supported by this browser');
        }
    }

    getCoordinates = (position) => {
        const coordinates = { ...this.state.coordinates };
        coordinates['latitude'] = position.coords.latitude;
        coordinates['longitude'] = position.coords.longitude;

        this.setState({ coordinates: coordinates });
        this.reverseGeocodeCoordinates();
    }

    reverseGeocodeCoordinates = () => {
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${ this.state.coordinates.latitude }, ${ this.state.coordinates.longitude }&key=${ GOOGLE_MAP_API_KEY }`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let countryName = '';
                for (let i = 0; i < data.results.length; i++) {
                    for (let j = 0; j < data.results[i].address_components.length; j++) {
                        let address_component = data.results[i].address_components;
                        if (address_component[j].types[0] === 'country') {
                            countryName = address_component[j].long_name;
                        }
                    }
                }
                const codes = countryData().filter(value => value.name.toLocaleLowerCase() === countryName.toLocaleLowerCase());
                let formData = { ...this.state.formData };
                formData['country'] = countryName;
                this.setState({
                    userAddress: data.results[0].formatted_address,
                    formData: formData,
                    code: codes[0].code
                });
            })
            .catch(error => alert(error));
    }

    handleLocationError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
            default:
                alert('An unknown error');
        }
    }

    handleFIle = (event, name) => {
        const url = URL.createObjectURL(event.target.files[0]);
        const formData = { ...this.state.formData };
        formData[name] = event.target.files[0];
        if (this.bytesToSize(event.target.files[0].size) > 3 && name === 'profile_photo') this.setState({ profilePhotoSizeError: true });
        if (this.bytesToSize(event.target.files[0].size) > 5 && name === 'cover_photo') this.setState({ coverPhotoSizeError: true });
        this.setState({
            formData: formData,
            coverPhotoPreview: name === 'cover_photo' ? url : this.state.coverPhotoPreview,
            profilePhotoPreview: name === 'profile_photo' ? url : this.state.profilePhotoPreview,
        });
    }

    handleInputChange = (event) => {
        const formData = { ...this.state.formData };
        if (event.target.name === 'contact_number') {
            let regex = /^\d+$/;
            this.setState({
                codeError: !regex.test(event.target.value.toString())
            });
            formData[event.target.name] = event.target.value;
        } else if (event.target.name === 'age') {
            this.setState({
                ageError: parseInt(event.target.value) < 18 ? true : false
            });
            formData[event.target.name] = event.target.value;
        }
        else {
            formData[event.target.name] = event.target.value;
        }

        this.setState({ formData: formData });
    }

    onSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();

        const { full_name, gender, age, description, cover_photo, profile_photo, country, contact_number, street, state, city, zip_code } = this.state.formData;

        const is_cover_photo_updated = this.state.coverPhotoPreview && cover_photo ? true : false;
        const is_profile_photo_updated = this.state.profilePhotoPreview && profile_photo ? true : false;

        formData.append('full_name', full_name);
        formData.append('gender', gender);
        formData.append('age', age);
        formData.append('description', description);
        formData.append('country', country);
        formData.append('contact_number', this.state.code + '$' + contact_number);
        formData.append('street', street);
        formData.append('state', state);
        formData.append('city', city);
        formData.append('zip_code', zip_code);
        formData.append('latitude', this.state.coordinates.latitude);
        formData.append('longitude', this.state.coordinates.longitude);
        formData.append('have_social_profile', this.state.have_social_profile);


        if (is_cover_photo_updated) {
            formData.append('image', cover_photo);
            formData.append('cover_photo_path', this.state.existingFiles.cover_photo);
            formData.append('is_cover_photo_updated', is_cover_photo_updated)
        } else {
            formData.append('cover_photo_path', this.state.existingFiles.cover_photo);
        }

        if (is_profile_photo_updated) {
            formData.append('image', profile_photo);
            formData.append('profile_photo_path', this.state.existingFiles.profile_photo);
            formData.append('is_profile_photo_updated', is_profile_photo_updated);
        } else {
            formData.append('profile_photo_path', this.state.existingFiles.profile_photo);
        }

        const { profilePhotoSizeError, coverPhotoSizeError } = this.state;

        if (contact_number && age && !profilePhotoSizeError && !coverPhotoSizeError) {
            this.props.onProfileUpdate(formData);
            this.setState({ formError: false });
        } else {
            this.setState({ formError: true });
        }

    }

    bytesToSize = (bytes) => (bytes / (1024 * 1024)).toFixed(2);

    gettingValue = (name) => {
        const data = countryData().filter(value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase());
        let formData = { ...this.state.formData };
        formData['country'] = name;
        this.setState({
            formData: formData,
            code: data[0].code
        });
    }
    render() {
        const { t } = this.props
        const { full_name, age, description, street, contact_number, state, city, zip_code, gender, country } = this.state.formData;
        return <div className={classes.Edit}>
            {this.props.message && !this.props.error ?
                <SimpleSnackbar open={true} message={this.props.message} type='success' height='40' />
                : null
            }
            {this.props.message && this.props.error ?
                <SimpleSnackbar open='true' message={this.props.message} type='error' height='50' />
                : null
            }
            <div className={classes.EditProfile}>
                <form onSubmit={this.onSubmit}>
                    <div className={classes.Header}>
                        <h4>{t('UserProfile:EditProfile.title')}</h4>
                        <li>{t('UserProfile:EditProfile.NB')}</li>
                    </div>
                    <div className={classes.InputElement}>
                        <h6>{t('UserProfile:EditProfile.firstSection.title')}</h6>
                        <div className={classes.Name}>
                            <div className={classes.NameItem}>
                                <input
                                    type='text'
                                    value={full_name}
                                    maxLength='100'
                                    name='full_name'
                                    onChange={this.handleInputChange}
                                    placeholder={t('UserProfile:EditProfile.firstSection.fields.0')}
                                    autoFocus />
                            </div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.MobileOnly}></div>
                            <div className={classes.NameItem}>
                                <select className={classes.DownArrow} name='gender' onChange={this.handleInputChange}>
                                    <option disabled selected>{t('UserProfile:EditProfile.firstSection.fields.gender.0')}</option>
                                    <option selected={gender === 'Male' ? true : false} value='Male'>{t('UserProfile:EditProfile.firstSection.fields.gender.1')}</option>
                                    <option selected={gender === 'Female' ? true : false} value='Female'>{t('UserProfile:EditProfile.firstSection.fields.gender.2')}</option>
                                    <option selected={gender === 'None' ? true : false} value='None'>{t('UserProfile:EditProfile.firstSection.fields.gender.3')}</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div className={classes.DividerH}></div>
                        <div className={classes.Name}>
                            <div className={classes.NameItem}>
                                <input
                                    type='text'
                                    value={age}
                                    min='18'
                                    name='age'
                                    onChange={this.handleInputChange}
                                    placeholder={t('UserProfile:EditProfile.firstSection.fields.1')} />
                                {this.state.ageError ?
                                    <strong>{t('UserProfile:EditProfile.firstSection.error')} </strong>
                                    : null
                                }
                            </div>
                        </div>
                        <div className={classes.DividerH}></div>
                        <div className={classes.Description}>
                            <textarea
                                value={description}
                                maxLength='400'
                                name='description'
                                onChange={this.handleInputChange}
                                placeholder={t('UserProfile:EditProfile.firstSection.fields.2')} ></textarea>
                        </div>
                        <h6>{t('UserProfile:EditProfile.secondSection.title')} </h6>
                        <div className={classes.MobileOnly}></div>
                        <div className={classes.File}>
                            <div className={classes.FileColumn}>
                                {this.state.coverPhotoPreview ?
                                    <img src={this.state.coverPhotoPreview} alt='cover_photo' />
                                    : null
                                }
                                {this.state.coverPhotoSizeError ?
                                    <strong>{t('UserProfile:EditProfile.secondSection.error5')}</strong> : null
                                }
                                <div className={classes.MobileOnly}></div>
                                <div className={classes.FileInput}>
                                    <input
                                        type='file'
                                        accept='image/*'
                                        onChange={(event) => this.handleFIle(event, 'cover_photo')} id='cover_photo'
                                        className={classes.UploadBox}
                                    />
                                    <label htmlFor='cover_photo'>
                                        <AddAPhoto />  <span>{t('UserProfile:EditProfile.secondSection.0')}</span>
                                    </label>
                                </div>
                            </div>
                            <div className={classes.DividerFIleH}></div>
                            <div className={classes.MobileOnly}></div>
                            <div className={classes.FileColumn}>
                                {this.state.profilePhotoPreview ?
                                    <img src={this.state.profilePhotoPreview} alt='profile_photo' />
                                    : null
                                }
                                {this.state.profilePhotoSizeError ?
                                    <strong>{t('UserProfile:EditProfile.secondSection.error3')}</strong> : null
                                }
                                <div className={classes.MobileOnly}></div>
                                <div className={classes.FileInput}>
                                    <input
                                        type='file'
                                        accept='image/*'
                                        onChange={(event) => this.handleFIle(event, 'profile_photo')} id='profile_photo'
                                    />
                                    <label htmlFor='profile_photo'>
                                        <AddAPhoto />  <span>{t('UserProfile:EditProfile.secondSection.1')}</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={classes.DividerV}></div>
                        <h6>{t('UserProfile:EditProfile.thirdSection.title')}</h6>
                        <div className={classes.Location}>
                            <div className={classes.LocationButton} onClick={this.getLocation}>{t('UserProfile:EditProfile.thirdSection.0')}</div>
                            <span>{t('UserProfile:EditProfile.thirdSection.1')} : {this.state.coordinates.latitude}</span>
                            <span>{t('UserProfile:EditProfile.thirdSection.2')} : {this.state.coordinates.longitude}</span>
                        </div>
                        <div className={classes.Divider}></div>
                        <div className={classes.MapResult}>
                            <div><p>{t('UserProfile:EditProfile.thirdSection.3')} : {this.state.userAddress}</p></div>
                            <div className={classes.Divider}></div>
                            <div>
                                {
                                    this.state.coordinates.latitude && this.state.coordinates.longitude ?
                                        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${ this.state.coordinates.latitude },${ this.state.coordinates.longitude }&zoom=15&size=500x300&markers=color:red|label:A|${ this.state.coordinates.latitude },${ this.state.coordinates.longitude }&key=${ GOOGLE_MAP_API_KEY }`} alt='Google map' />
                                        : null
                                }

                            </div>
                        </div>


                        <div className={classes.MobileOnlyLocation}>
                            <div className={classes.LocationButton} onClick={this.getLocation}>{t('UserProfile:EditProfile.thirdSection.0')}</div>
                            <div className={classes.MobileOnly}></div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.MobileOnlyFlex}>
                                <div className={classes.MobileOnlyFlexItem}>
                                    <span>{t('UserProfile:EditProfile.thirdSection.1')} : {this.state.coordinates.latitude}</span>
                                </div>
                                <div className={classes.MobileOnlyFlexItem}>
                                    <span>{t('UserProfile:EditProfile.thirdSection.2')} : {this.state.coordinates.longitude}</span>
                                </div>
                            </div>
                            <div className={classes.Divider}></div>
                            <div>
                                <p>{t('UserProfile:EditProfile.thirdSection.3')} : {this.state.userAddress}</p>
                            </div>
                            <div className={classes.Divider}></div>
                            <div>
                                {
                                    this.state.coordinates.latitude && this.state.coordinates.longitude ?
                                        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${ this.state.coordinates.latitude },${ this.state.coordinates.longitude }&zoom=15&size=500x300&markers=color:red|label:A|${ this.state.coordinates.latitude },${ this.state.coordinates.longitude }&key=${ GOOGLE_MAP_API_KEY }`} alt='Google map' />
                                        : null
                                }
                            </div>

                        </div>
                        <div className={classes.DividerV}></div>
                        <h6>{t('UserProfile:EditProfile.forthSection.title')}</h6>
                        <div className={classes.Name}>
                            <div className={classes.NameItem}>
                                <Autocomplete
                                    suggestions={countryData()}
                                    getValue={this.gettingValue}
                                    prevValue={country}
                                    t={t}
                                />
                            </div>
                            <div className={classes.MobileOnly}></div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.NameItem}>
                                <div className={classes.ContactNumber}>
                                    <div className={classes.ContactNumberItem1}>
                                        {this.state.code}
                                    </div>
                                    <div className={classes.ContactNumberItem2}>
                                        <input
                                            type='text'
                                            maxLength='15'
                                            value={contact_number}
                                            name='contact_number'
                                            onChange={this.handleInputChange}
                                            placeholder={t('UserProfile:EditProfile.forthSection.fields.1')} />

                                    </div>
                                </div>
                                {
                                    this.state.codeError ?
                                        <strong>{t('UserProfile:EditProfile.forthSection.error')}</strong>
                                        : null
                                }
                            </div>

                        </div>
                        <div className={classes.DividerV}></div>
                        <div className={classes.Name}>
                            <div className={classes.NameItem}>
                                <input
                                    value={street}
                                    type='text'
                                    maxLength='50'
                                    name='street'
                                    onChange={this.handleInputChange}
                                    placeholder={t('UserProfile:EditProfile.forthSection.fields.2')} />
                            </div>
                            <div className={classes.MobileOnly}></div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.NameItem}>
                                <input
                                    value={city}
                                    type='text'
                                    maxLength='25'
                                    name='city'
                                    onChange={this.handleInputChange}
                                    placeholder={t('UserProfile:EditProfile.forthSection.fields.3')} />
                            </div>
                        </div>
                        <div className={classes.DividerV}></div>
                        <div className={classes.Name}>
                            <div className={classes.NameItem}>
                                <input
                                    value={state}
                                    type='text'
                                    maxLength='25'
                                    name='state'
                                    onChange={this.handleInputChange}
                                    placeholder={t('UserProfile:EditProfile.forthSection.fields.4')} />
                            </div>
                            <div className={classes.DividerH}></div>
                            <div className={classes.MobileOnly}></div>
                            <div className={classes.NameItem}>
                                <input
                                    value={zip_code}
                                    type='text'
                                    maxLength='10'
                                    name='zip_code'
                                    onChange={this.handleInputChange}
                                    placeholder={t('UserProfile:EditProfile.forthSection.fields.5')} />
                            </div>
                        </div>
                        <div className={classes.DividerV}></div>
                        <div className={classes.UpdateButton}>
                            {this.props.loading ?
                                <CircularProgressWithLabel value={this.props.loadingPercentage} />
                                : <Button buttonType='Submit' clicked={this.onSubmit}><i class="fa fa-paper-plane" aria-hidden="true"></i>
                                    {t('UserProfile:EditProfile.button')}</Button>
                            }
                            {this.state.formError ? <strong>{t('UserProfile:EditProfile.error')}</strong> : null}
                        </div>
                    </div>
                </form>
                <div className={classes.DividerV}></div>
            </div>
        </div>
    }
}

EditProfile.propTypes = {
    error: PropTypes.bool,
    onProfileUpdate: PropTypes.func,
    loadingPercentage: PropTypes.string,
    message: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        error: state.profile.error,
        loading: state.profile.loading,
        loadingPercentage: state.profile.loading_percentage,
        message: state.profile.message,
        profile: state.profile.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onProfileUpdate: (body) => dispatch(actions.profileUpdate(body)),
        onGetProfile: () => dispatch(actions.getProfile()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation(['translation', 'UserProfile'])(EditProfile));