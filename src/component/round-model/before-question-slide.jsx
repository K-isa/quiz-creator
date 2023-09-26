import React from 'react';
import { AddSlide } from '../items/add-slide';
import { AnimatedSimpleSlideModel } from '../slides/animatedSimpleSlideModel';

export function BeforeQuestionSlide () {
    return <div className="beforeQuestionSlide mt-3">
    <h4>BeforeQuestionSlide</h4>
    <AnimatedSimpleSlideModel />
    <AddSlide />
</div>
}