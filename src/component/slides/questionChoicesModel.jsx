import React from 'react';
import { DeleteButton } from '../items/delete-button';
import { ColorSelectForm } from '../items/color-select-form';
import { TextArea } from '../items/text-area';
import { ImageArea } from '../items/image-area';
import { SlideSound } from '../items/slide-sound';

export function QuestionChoicesModel() {
    return <>
    <div className="questionChoicesModel mt-4">

        <div className="row mt-3">
            <div className="col">
                <h5>QuestionChoicesModel</h5>
            </div>
            <DeleteButton />
        </div>

        <TextArea />

        <ImageArea />

        <ColorSelectForm />

        <SlideSound />

    </div>
</>
}