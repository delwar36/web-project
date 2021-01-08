import React from 'react';
export const DataLoadError = ({ text }) =>
    <div
        style={{
            display: 'flex',
            flexFlow: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            width: '96%',
            margin: '0 20px'
        }}>
        <h4>{text}</h4>
    </div>