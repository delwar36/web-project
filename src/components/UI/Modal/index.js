import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { Slide, Zoom } from 'react-reveal';

export const Modal = (props) =>
    <React.Fragment>
        <Backdrop
            show={props.show}
            clicked={props.modalClosed} />
        {props.show && props.type === 'lightbox' ?
            <Zoom>
                <div className={classes.Modal} style={{ opacity: props.show ? '1' : '0' }}>
                    {props.children}
                </div>
            </Zoom> : null}
        {props.show && props.type === 'normal' ?
            <Slide top>
                <div className={classes.Modal} style={{ opacity: props.show ? '1' : '0' }}>
                    {props.children}
                </div>
            </Slide> : null}
    </React.Fragment >
