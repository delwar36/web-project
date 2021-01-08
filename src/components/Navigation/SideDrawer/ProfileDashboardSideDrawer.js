import React from 'react';
import NavigationItems from './NavigationItems/ProfileDashboardNavigationsItems';
import NavigationItemsDesktopOnly from './NavigationItems/ProfileDashboardNavigationsItemsDesktopOnly';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import profileImage from '../../../assets/images/profileImage.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} >
                <div className={classes.UserInfo}>
                    <div className={classes.closeHandler}>
                        <Link
                            to="/my_profile">
                            <img src={props.user ? props.user.profile_image : profileImage} alt='ProfileImage' />
                        </Link>
                        <i className="fas fa-times" onClick={props.closed}></i>
                        <h3>{props.user ? props.user.full_name : null}</h3>
                        <p>{props.user ? props.user.email : null}</p>
                    </div>
                </div>
                <div className={classes.Divider}></div>
                <nav onClick={props.closed}>
                    <NavigationItems />
                </nav>
            </div>

            <div className={classes.FixedSideNav}>
                <nav className="animate__animated animate__fadeInLeft">
                    <NavigationItemsDesktopOnly />
                </nav>
            </div>
        </Aux>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.userAuth.user,
        isAuthenticated: state.userAuth.token !== null,
    }
};
export default connect(mapStateToProps)(SideDrawer);