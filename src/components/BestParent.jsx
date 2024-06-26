import React from 'react';
import BestChild from './BestChild';

const BestParent = () => {

    const config = { value: 'example', setting: true };

    return (
        <div>
            <BestChild value={config.value} setting={config.setting} />
        </div>
    );
};

export default BestParent;
