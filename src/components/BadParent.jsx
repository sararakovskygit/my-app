
import React from "react";
import Child from "./Child";

const BadParent = () => {

    return (
        <div>
            <Child config={{ value: 'example', setting: true }} />
        </div>
    );
};

export default BadParent;