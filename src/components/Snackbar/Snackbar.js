import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
    return <MuiAlert elevation={1} variant="filled" {...props} />;
}

class SimpleSnackbar extends React.Component {
    state = { open: false }
    componentDidMount() {
        this.setState({ open: this.props.open });
    }
    handleClick = () => this.setState({ open: true });
    handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        this.setState({ open: false });
    };
    render() {
        const height = this.props.height + 'px';
        const style = { height: height, width: '300px' }
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={this.state.open}
                autoHideDuration={this.props.autoHide === 'autoHide' ? null : 5000}
                onClose={this.handleClose}
            >
                <Alert style={style} onClose={this.handleClose} severity={this.props.type}>
                    {this.props.message}
                </Alert>
            </Snackbar>
        );
    }
}

export default SimpleSnackbar;