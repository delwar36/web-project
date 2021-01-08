import React from 'react'
import SocialLogin from 'react-social-login'
import Button from '../../../../components/UI/Button/Button';

class GoogleButton extends React.Component {
    render() {
        return (
            <Button buttonType='Google' clicked={this.props.triggerLogin} {...this.props}>
                { this.props.children}
            </Button>
        );
    }
}

export default SocialLogin(GoogleButton);