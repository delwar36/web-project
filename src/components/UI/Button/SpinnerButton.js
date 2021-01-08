import React from 'react';
import Button from './Button';

const SpinnerButton = (props) => {
    const size = props.spinSize + 'px';
    const style = {
        fontSize: size
    }
    return <Button buttonType={props.buttonType}>
        <i style={style}
            className="fa fa-refresh fa-spin"
            aria-hidden="true">
        </i>
    </Button>
};

export default SpinnerButton;