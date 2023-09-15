import React from 'react';

export function ColorSelectForm() {
    
    return         <select className="form-select mt-3" style={{ width: '200px' }} aria-label="Default select example">
            <option selected style={{color: 'red'}}>bg_color red
            </option>
            <option selected style={{color: 'green'}}>bg_color green</option>

        </select>
}