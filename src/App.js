import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import * as actions from './store/actions'
import { connect } from 'react-redux';
import SimpleSnackbar from './components/Snackbar/Snackbar'

/** Layouts **/
import NormalUserLayoutRoute from "./hoc/Layout/NormalUserLayout";
import DashboardLayoutRoute from "./hoc/Layout/ProfileDashboardLayout";
import AppStartPageRoute from "./hoc/Layout/AppStartLayout";


import { NoMatch } from './hoc/Aux/NoMatch';

/** App Start Page*/
import AppStartPage from './containers/AppStartPage';

/** Containers for  NormalUserLayout*/
import Auth from './containers/NormalUser/Auth';
import Logout from './containers/NormalUser/Auth/Logout/Logout';
import Packages from './containers/NormalUser/Packages/Packages';
import Contact from './containers/NormalUser/Others/Contact/Contact';
import About from './containers/NormalUser/Others/About/About';
import StartSelling from './containers/NormalUser/StartSelling/StartSelling';
import TermsConditions from './containers/NormalUser/Others/TermsConditionsPrivacyPolicy/TermsConditions';
import PrivacyPolicy from './containers/NormalUser/Others/TermsConditionsPrivacyPolicy/PrivacyPolicy';
import { SubCategory } from './containers/NormalUser/SubCategory';

/** Containers for  ProfileDashboardLayout*/
import ProfileDashBoard from './containers/ProfileDashBoard/Dashboard/Dashboard';
import Earnings from './containers/ProfileDashBoard/Earnings/Earnings';
import Feedbacks from './containers/ProfileDashBoard/Feedbacks/Feedbacks';
import Inbox from './containers/ProfileDashBoard/Inbox/Inbox';
import Invoices from './containers/ProfileDashBoard/Invoices/Invoices';
import MyAdds from './containers/ProfileDashBoard/MyAdds/MyAdds';
import CreateAdd from './containers/ProfileDashBoard/MyAdds/CreateAdd';
import MyOrders from './containers/ProfileDashBoard/MyOrders/MyOrders';
import OrdersInfo from './containers/ProfileDashBoard/MyOrders/OrdersInfo';
import Sold from './containers/ProfileDashBoard/Sold/Sold';

import asyncComponent from './hoc/AsyncComponent/asyncComponent';

/**  lazy imports for  NormalUserLayout*/
const asyncCustomers = asyncComponent(() => {
  return import('./containers/ProfileDashBoard/Customers/Customers');
});
const asyncAdvertise = asyncComponent(() => {
  return import('./containers/NormalUser/Advertises/Advertises');
});

const asyncSingleAdvertise = asyncComponent(() => {
  return import('./containers/NormalUser/Advertises/SingleAdvertise/SingleAdvertise');
});

/**  lazy imports for  ProfileDashboardLayout*/
const asyncUserProfile = asyncComponent(() => {
  return import('./containers/ProfileDashBoard/UserProfile/UserProfile');
});

const asyncEditProfile = asyncComponent(() => {
  return import('./containers/ProfileDashBoard/UserProfile/EditProfile');
});

class App extends Component {
  state = {
    isDisconnected: false
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleConnectionChange);
    window.removeEventListener('offline', this.handleConnectionChange);
  }

  handleConnectionChange = () => {
    const condition = window.navigator.onLine ? 'online' : 'offline';
    if (condition === 'online') {
      const webPing = setInterval(() => {
        fetch('//google.com', {
          mode: 'no-cors',
        }).then(() => {
          this.setState({ isDisconnected: false }, () => clearInterval(webPing));
        }).catch(() => this.setState({ isDisconnected: true }))
      }, 1000);
      return;
    }
    return this.setState({ isDisconnected: true });
  }
  componentDidMount() {
    this.handleConnectionChange();
    window.addEventListener('online', this.handleConnectionChange);
    window.addEventListener('offline', this.handleConnectionChange);
    window.scroll(0, 0)
    if (!this.props.isAuthenticated) this.props.onTryAutoSignup();
  }
  render() {
    let routes = <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <NormalUserLayoutRoute path="/login" component={Auth} />
      <NormalUserLayoutRoute path="/join" component={Auth} />
      <NormalUserLayoutRoute path="/logout" component={Logout} />
      <NormalUserLayoutRoute path="/advertise/description/:advertiseId" component={asyncSingleAdvertise} />
      <NormalUserLayoutRoute path="/advertise/:advertiseType" component={asyncAdvertise} />
      <NormalUserLayoutRoute path="/subscription-packages" component={Packages} />
      <NormalUserLayoutRoute path="/contact" component={Contact} />
      <NormalUserLayoutRoute path="/about" component={About} />
      <NormalUserLayoutRoute path="/start_selling" component={StartSelling} />
      <NormalUserLayoutRoute path="/terms-and-conditions" component={TermsConditions} />
      <NormalUserLayoutRoute path="/privacy-policy" component={PrivacyPolicy} />
      <NormalUserLayoutRoute path="/categories/:categoryId" component={SubCategory} />
      <AppStartPageRoute path="/home" exact component={AppStartPage} />
    </Switch>
    // if (this.props.isAuthenticated) {
      if (!this.props.isAuthenticated) {
      routes = <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <DashboardLayoutRoute path="/profile_dashboard" component={ProfileDashBoard} />
        <DashboardLayoutRoute path="/my_profile" component={asyncUserProfile} />
        <DashboardLayoutRoute path="/edit_profile" component={asyncEditProfile} />
        <DashboardLayoutRoute path="/my_customers" component={asyncCustomers} />
        <DashboardLayoutRoute path="/my_earnings" component={Earnings} />
        <DashboardLayoutRoute path="/feedbacks" component={Feedbacks} />
        <DashboardLayoutRoute path="/inbox" component={Inbox} />
        <DashboardLayoutRoute path="/invoices" component={Invoices} />
        <DashboardLayoutRoute path="/my_adds" component={MyAdds} />
        <DashboardLayoutRoute path="/create_add" component={CreateAdd} />
        <DashboardLayoutRoute path="/my_orders" component={MyOrders} />
        <DashboardLayoutRoute path="/orders_info" exact={true} component={OrdersInfo} />
        <DashboardLayoutRoute path="/sold" component={Sold} />

        <NormalUserLayoutRoute path="/login" component={Auth} />
        <NormalUserLayoutRoute path="/join" component={Auth} />
        <NormalUserLayoutRoute path="/logout" component={Logout} />
        <NormalUserLayoutRoute path="/advertise/description/:advertiseId" component={asyncSingleAdvertise} />
        {/* <NormalUserLayoutRoute path="/advertise/description/:advertiseId/:referralCode" component={asyncSingleAdvertise} /> */}
        <NormalUserLayoutRoute path="/advertise/:advertiseType" component={asyncAdvertise} />
        <NormalUserLayoutRoute path="/subscription-packages" component={Packages} />
        <NormalUserLayoutRoute path="/contact" component={Contact} />
        <NormalUserLayoutRoute path="/about" component={About} />
        <NormalUserLayoutRoute path="/start_selling" component={StartSelling} />
        <NormalUserLayoutRoute path="/terms-and-conditions" component={TermsConditions} />
        <NormalUserLayoutRoute path="/privacy-policy" component={PrivacyPolicy} />
        <NormalUserLayoutRoute path="/categories/:categoryId" component={SubCategory} />

        <AppStartPageRoute path="/home" exact component={AppStartPage} />

        <Route component={NoMatch} />
      </Switch>
    }
    return <React.Fragment>
      {this.state.isDisconnected ? < SimpleSnackbar open={true} message='You are offline now, go to online.' type='warning' autoHide='autoHide' height='40' /> : null}
      {routes}
    </React.Fragment>
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));