import React from 'react';

export function InputForm() {
    return <>
        <div className="input-group flex-nowrap " style={{ width: '200px' }}>
            <input type="text" className="form-control mt-4" placeholder="Название" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
    </>
}