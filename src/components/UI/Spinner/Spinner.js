import React from 'react';
import classes from './Spinner.module.css';
import { CircularProgress } from '@material-ui/core';

export const Spinner = () => <div className={classes.Spinner}><CircularProgress /></div>;

