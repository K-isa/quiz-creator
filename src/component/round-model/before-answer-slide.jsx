import React from 'react';
import { AddSlide } from '../items/add-slide';
import { TitleSLideModel } from '../slides/titleSlideModel';

export function BeforeAnswerSlide () {
    return <div className="beforeAnswerSlide mt-3">
        <h4>BeforeAnswerSlide</h4>
        <TitleSLideModel />
        <AddSlide />
    </div>
}