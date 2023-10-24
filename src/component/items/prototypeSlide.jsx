import React from 'react';
import { SelectedField } from './SelectedField';
import { TextArea } from './text-area';

export function PrototypeSlide () {
return <div className="titleSlideModel mt-4">

<div className="row mt-3">
    <div className="col">
        <h4>TitleSlideModel</h4>
    </div>
    <div className="col">
                <button type="button" className='btn btn-primary btn-sm'>Удалить слайд</button>
            </div>
</div>

<TextArea/>

<SelectedField />

<TextArea/>

</div>

}