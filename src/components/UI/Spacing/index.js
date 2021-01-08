import React from 'react';

export const Divider = ({ space, orientation }) => {
    const verticalSpace = orientation === 'v' ? space : '0';
    const horizontalSpace = orientation === 'h' ? space : '0';
    const style = {
        margin: `${ verticalSpace }% ${ horizontalSpace }%`
    }
    return <div style={style}></div>
};

export const Line = ({ width, height, space, orientation, backgroundColor }) => {
    const verticalUnit = orientation === 'v' ? '%' : 'px';
    const horizontalUnit = orientation === 'h' ? '%' : 'px';
    const verticalSpace = orientation === 'v' ? space : '0';
    const horizontalSpace = orientation === 'h' ? space : '0';
    const _backgroundColor = backgroundColor ? backgroundColor :'rgb(233, 230, 230)' ;
    const style = {
        width: `${ width }${ horizontalUnit }`,
        height: `${ height }${ verticalUnit }`,
        backgroundColor: `${ _backgroundColor }`,
        margin: `${ horizontalSpace }% ${ verticalSpace }%`,
        borderRadius:'5px'
    }
    return <div style={style}></div>
};
