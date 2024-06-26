import React, { useEffect } from 'react';

const BestChild = ({ value, settings }) => {

    useEffect(() => {
        console.log('BestChild component rendered');
    });

    return <div>value: {value}</div>;
};

export default BestChild;