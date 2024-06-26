import React, { useEffect } from "react";

const Child = ({ config }) => {

    useEffect(() => {
        console.log('ChildComponent useEffect triggered');
    });

    return <div>Config value: {config.value}</div>;
};

export default Child;