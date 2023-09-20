import React from 'react';
import { DeleteButton } from '../items/delete-button';
import { SlideSound } from '../items/slide-sound';
import { BeforeAnswerSlide } from './before-answer-slide';
import { BeforeQuestionSlide } from './before-question-slide';
import { QuestionSlide } from './question-slide';

export function RoundModels() {
    return <div className='roundModel mt-4 '>
        <div className="row">
            <div className="col">
                <h3>Round Model</h3>
            </div>
            <DeleteButton />
        </div>

        <SlideSound />

        <BeforeQuestionSlide/>

        <BeforeAnswerSlide/>

        <QuestionSlide/>

    </div>
}