import React, { useMemo } from "react";
import Child from "./Child";

const Parent = () => {
    const config = useMemo(() => ({ value: 'example', setting: true }), []);

    return (
        <div>
            <Child config={config} />
        </div>
    );
};

export default React.memo(Parent) ;
