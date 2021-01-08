import React, { useEffect } from 'react';

const ScrollTopOnMount = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>

        </div>
    );
};

export default ScrollTopOnMount;