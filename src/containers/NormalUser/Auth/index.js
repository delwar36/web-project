import React from 'react';
import Join from './SignUp';
import SignIn from './Login';
import Tabs from '../../../components/Tabs/Tabs';
import '../../../components/Tabs/Tabs.css';
import classes from "./Auth.module.css";
import SimpleSnackbar from '../../../components/Snackbar/Snackbar';
import { connect } from 'react-redux';

const Auth = (props) =>
    <React.Fragment>
        {props.message && !props.error ?
            <SimpleSnackbar open={true} message={props.message} type='success' height='40' />
            : null}
        {props.message && props.error ?
            <SimpleSnackbar open='true' message={props.message} type='error' height='50' />
            : null}
        <div className={classes.AuthItems}>
            <div className={classes.Auth}>
                <Tabs>
                    <div label='Join'>  <Join /></div>
                    <div label='Sign In'>  <SignIn /> </div>
                </Tabs>
            </div>
        </div>
    </React.Fragment>
    
const mapStateToProps = (state) => {
    return {
        error: state.userAuth.error,
        message: state.userAuth.message,
        isAuthenticated: state.userAuth.token !== null,
    }
};

export default connect(mapStateToProps, null)(Auth);