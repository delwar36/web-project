import React from 'react'
import SocialLogin from 'react-social-login'
import Button from '../../../../components/UI/Button/Button';

class FacebookButton extends React.Component {
    render() {
        return (
            <Button  buttonType='Facebook' clicked={this.props.triggerLogin} {...this.props}>
                { this.props.children}
            </Button>
        );
    }
}

export default SocialLogin(FacebookButton);