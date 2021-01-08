import React from 'react';
import classes from './Packages.module.css';
import { Flip, Fade } from 'react-reveal';
import { Line } from '../../../components/UI/Spacing';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import { Spinner } from '../../../components/UI/Spinner/Spinner';
import { DataLoadError } from '../../../components/UI/DataLoadError';
import SimpleSnackbar from '../../../components/Snackbar/Snackbar';
import { useHistory } from 'react-router-dom';

const allPackages = [
    { text: 'One', background: 'tomato' },
    { text: 'Two', background: 'blueviolet' },
    { text: 'Three', background: 'greenyellow' }
];

const Packages = (props) => {
    const [fetchedPackages, setFetchedPackages] = React.useState([]);
    const [spinner, setShowSpinner] = React.useState(true);
    const [currentPackageId, setCurrentPackageId] = React.useState(true);
    const { packages, getSubscriptionPackages } = props;
    React.useEffect(() => {
        const fetchSubscriptionPackages = async () => {
            if (!packages) {
                await getSubscriptionPackages()
                setFetchedPackages(packages);
            }
        }
        fetchSubscriptionPackages();
        setTimeout(() => {
            setShowSpinner(false)
        }, 20000);
    }, [fetchedPackages, getSubscriptionPackages, packages, spinner]);
    const history = useHistory();
    const handlePackageId = (event, packageId) => {
        event.preventDefault();
        if (props.isAuthenticated) {
            const filteredPackage = packages.filter(packageData => packageData._id === packageId);
            const currentDate = new Date();
            currentDate.setUTCFullYear(currentDate.getUTCFullYear() + parseInt(filteredPackage[0].validity));
            setCurrentPackageId(packageId)
            props.selectSubscriptionPackage({ packageId, expiredAt: currentDate })
        } else {
            history.push('/join');
        }
    }
    return <React.Fragment>
        <div className={classes.Package}>
            {props.message && !props.error ?
                <SimpleSnackbar open={true} message={props.message} type='success' height='40' />
                : null
            }
            {props.message && props.error ?
                <SimpleSnackbar open='true' message={props.message} type='error' height='50' />
                : null
            }
            {props.loading ? <Spinner /> : null}
            <h3>Choose your preferred subscription package</h3>
            <div className={classes.BoxRow}>
                {packages ? packages.map((packageData, index) => (
                    <Flip delay={500 * (index + 1)} key={index}>
                        <div className={classes.BoxRowElement}>
                            <h4 className={classes.PackageHeader} style={{ background: allPackages[index].background }}>{packageData.type}</h4>
                            <br />
                            <h5>{packageData.title}</h5>
                            <div className={classes.PackageDescription}>
                                {packageData.privileges.map((privilege, index) => (
                                    <p key={index}><i className="fas fa-check-circle"></i>{privilege}</p>
                                ))}
                            </div>
                            <div className={classes.Benefits}>
                                <p>Benefits :</p>
                                {packageData.benefits.map((benefit, index) => (
                                    <React.Fragment>
                                        <small key={index}>{index + 1}. {benefit}</small><br />
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className={classes.BoxRowElementButton}>
                                <button onClick={(event) => handlePackageId(event, packageData._id)} style={{ background: allPackages[index].background }}><p>Get Started</p></button>
                            </div>
                        </div>
                    </Flip>
                )) :
                    spinner ?
                        <Spinner /> :
                        <DataLoadError text='There are no subscription package created yet or an error created.Try again later :)' />
                }
            </div>
        </div>
        <div className={classes.PriceAndConditions}>
            <h3><i className="fas fa-th-list"></i>Terms and Condition For Packages</h3>
            <Line width='100' orientation='h' space='1' height='1' />
            <div className={classes.PriceAndConditionsItems}>
                {packages ? packages.map((packageData, index) => (
                    <Fade delay={500 * (index + 1)} key={index}>
                        <div className={classes.PriceAndConditionsItem}>
                            <h6>For Package {allPackages[index].text}</h6>
                            {packageData.terms_conditions.map((condition, index) => (
                                <React.Fragment>
                                    <span key={index}>{index + 1}. {condition}</span><br />
                                </React.Fragment>
                            ))}
                        </div>
                    </Fade>
                )) : spinner ?
                        <Spinner /> :
                        <DataLoadError text='There are no terms and conditions created yet or an error created.Try again later :)' />
                }
            </div>
        </div>
    </React.Fragment>
};
const mapStateToProps = (state) => {
    return {
        error: state.subscriptionPackages.error,
        loading: state.subscriptionPackages.loading,
        packages: state.subscriptionPackages.packages,
        message: state.subscriptionPackages.message,
        isAuthenticated: state.userAuth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSubscriptionPackages: () => dispatch(actions.getSubscriptionPackages()),
        selectSubscriptionPackage: (body) => dispatch(actions.selectSubscriptionPackage(body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Packages);
