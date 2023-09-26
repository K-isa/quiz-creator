import React from 'react';
import { AddSlide } from '../items/add-slide';
import { QuestionChoicesModel } from '../slides/questionChoicesModel';

export function QuestionSlide () {
    return <div className="questionSlide mt-3">
    <h4>Questions</h4>

    <QuestionChoicesModel />
    <AddSlide />
</div>
}