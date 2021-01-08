import React, { Component } from 'react';
import { Modal } from '../../components/UI/Modal';
import classes from './withErrorHandler.module.css';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });
            this.responseInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error })
            });
        }
        // componentWillUnmount() {
        //     axios.interceptors.request.eject(this.requestInterceptor);
        //     axios.interceptors.response.eject(this.responseInterceptor);
        // }

        errorConfirmHandler = () => {
            this.setState({ error: null })
        }
        render() {
            return <React.Fragment>
                <Modal
                    type='normal'
                    show={this.state.error}
                    modalClosed={this.errorConfirmHandler}>
                    <div className={classes.NetworkError}>
                        <big>{this.state.error ? this.state.error.message : null}</big>
                        <i className="fas fa-times" onClick={this.errorConfirmHandler}></i>
                    </div>
                </Modal>
                <WrappedComponent {...this.props} />
            </React.Fragment>
        }
    };
};

export default withErrorHandler;