import React from 'react';
import { DeleteButton } from '../items/delete-button';
import { ColorSelectForm } from '../items/color-select-form';
import { TextArea } from '../items/text-area';
import { SlideSound } from '../items/slide-sound';

export function TitleSLideModel() {
    return <>
        <div className="titleSlideModel mt-4">

            <div className="row mt-3">
                <div className="col">
                    <h5>TitleSlideModel</h5>
                </div>
                <DeleteButton />
            </div>

            <TextArea />

            <ColorSelectForm />

            <SlideSound />

        </div>
    </>
}