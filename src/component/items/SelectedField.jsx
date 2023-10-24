import React from 'react';

export function SelectedField({name, value, onChange}) {

    const optionsList = ['bg_color red', 'bg_color green']

    return <div className='mb-4'>
    <label className='form-label' htmlFor=''>
        {name}
    </label>
    <select
        className='form-select'
        id={name}
        value={value}
        required
        name={name}
        onChange={onChange}>
        {optionsList.length > 0 &&
            optionsList.map((option) => (
                <option value={option} key={option}>
                    {option}
                </option>
            ))}
    </select>
</div>
}