import React from 'react';

export function TextArea({value, onChange, name}) {
    
    return <>
        <div className="mt-3">
        <label htmlFor={name}>{name}</label>
        <div className="input-group has-validation">
        
            <input
                type='text'
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className='form-control'
            />
        </div>
        </div>
    </>
}