import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Toolbar from '../../components/Navigation/Toolbar/AppStartToolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/NormalUserSideDrawer';
import Footer from '../../components/Footer/Footer';

class AppStartLayout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <React.Fragment>
                
                {/* <SimpleSnackbar open={true} message='No connection' type='success' height='40' /> */}
                <Toolbar
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

const NormalUserLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <AppStartLayout>
                <Component {...matchProps} />
            </AppStartLayout>
        )} />
    )
};

export default NormalUserLayoutRoute;
