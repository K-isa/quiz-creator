import React from 'react';

export function AddModule() {
    return <div className="row mt-4">
    <div className="col">
        <select className="form-select mt-3" style={{ width: '200px' }} aria-label="Default select example">
            <option selected>ChapterModule</option>
            <option value="1">RoundModule 1</option>
            <option value="2">RoundModule 2</option>
            <option value="3">RoundModule 3</option>
            <option value="4">RoundModule 3</option>
        </select>

    </div>

    <div className="col mt-3">
        <button type="button" className='btn btn-primary btn-sm'>Добавить Модуль</button>
    </div>
</div>
}