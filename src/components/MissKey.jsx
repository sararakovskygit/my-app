import React, { useState } from "react";

const items = [1, 2, 3];

const MissKey = ({ numbers }) => {

    return (
        <>
            {
                numbers.map((number) =>
                    <li key={number.toString()}>
                        {number}
                    </li>)
            }
        </>);
}

export default MissKey;