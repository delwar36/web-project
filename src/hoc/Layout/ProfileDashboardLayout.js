import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Aux from '../Aux/Aux'
import Toolbar from '../../components/Navigation/Toolbar/ProfileDashboardToolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/ProfileDashboardSideDrawer';
import Footer from '../../components/Footer/NormalFooter';


class DashboardLayout extends Component {
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
            <Aux>
                <Toolbar
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main >
                    {this.props.children}
                </main>
                {/* <Footer /> */}
               
            </Aux>
        )
    }
}

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <DashboardLayout>
                <Component {...matchProps} />
            </DashboardLayout>
        )} />
    )
};

export default DashboardLayoutRoute;