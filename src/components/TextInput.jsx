import React from 'react';

const TextInput = ({ label, value, onChange }) => {
    return (
        <div>
            <label>
                {label}
                <input type="text" value={value} onChange={onChange} />
            </label>
        </div>
    );
};

export default TextInput;
