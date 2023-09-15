import React from 'react';
import { DeleteButton } from './delete-button';
import { ColorSelectForm } from './color-select-form';
import { TextArea } from './text-area';

export function PrototypeSlide () {
return <div className="titleSlideModel mt-4">

<div className="row mt-3">
    <div className="col">
        <h4>TitleSlideModel</h4>
    </div>
    <DeleteButton />
</div>

<TextArea/>

<ColorSelectForm />

<TextArea/>

</div>

}