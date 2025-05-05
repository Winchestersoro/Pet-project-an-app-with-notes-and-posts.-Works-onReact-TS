import React from 'react';

interface Option {
    value: string | number;
    name: string;
}
interface TheSelectProps {
    options: Option[];
    value: string | number;
    onChange: (value: string | number) => void;
    defaultValue: string;
}

const TheSelect : React.FC<TheSelectProps> = ({ options, value, onChange, defaultValue }) => {
    return (
        <select 
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option key={option.name} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};
export default TheSelect;