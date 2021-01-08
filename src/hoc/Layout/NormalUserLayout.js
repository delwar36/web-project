import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Toolbar from '../../components/Navigation/Toolbar/NormalUserToolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/NormalUserSideDrawer';
import Footer from '../../components/Footer/NormalFooter';


class NormalUserLayout extends Component {
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
        return <React.Fragment>
            <Toolbar
                drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler} />
            <main style={{minHeight:'70vh'}}>
                {this.props.children}
            </main>
            <Footer />
        </React.Fragment>
    }
}

const NormalUserLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <NormalUserLayout>
                <Component {...matchProps} />
            </NormalUserLayout>
        )} />
    )
};

export default NormalUserLayoutRoute;