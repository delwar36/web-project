import React from 'react';
import HomeSlide from './HomeSlide/HomeSlide';
import ServicesDetails from './ServicesDetails/ServicesDetails';
import ImageSlider from './ImageSlider/ImageSlider';
import Middle from './Middle/Middle';
import SimpleSnackbar from '../../components/Snackbar/Snackbar';

class index extends React.Component {
  state = {
    appleUser: "",
    message: ""
  }
  componentDidMount() {
    if (this.props.location.search) {
      const search = this.props.location.search; // could be '?foo=bar'
      const params = new URLSearchParams(search);
      let user = params.get('user')
      let ok = params.get('ok')
      // console.log(user,ok)
      this.setState({
        appleUser: user,
        message: ok
      })
    }
  }
  render() {
    let { appleUser, message } = this.state;
    let messageShouldShow = ""
    if (appleUser && message) {
      messageShouldShow = "Welcome to  media advertising" + appleUser + ", " + message
    }
    return <React.Fragment>
      {this.state.appleUser.length !== 0 ?
        <SimpleSnackbar open={true} message={messageShouldShow} type='success' height='70' />
        : null}
      <HomeSlide />
      <Middle />
      <ImageSlider />
      <ServicesDetails />
    </React.Fragment>
  }
};

export default index;