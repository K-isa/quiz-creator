import React, { useState } from 'react';
import { BeforeAnswerSlide } from './before-answer-slide';
import { BeforeQuestionSlide } from './before-question-slide';
import { QuestionSlide } from './question-slide';
import { TextArea } from '../items/text-area';

export function RoundModels() {
    const [data, setData] = useState({ sound: '' })

    const handleChange = ({ target }) => {
        setData((prevstate) => ({ ...prevstate, [target.name]: target.value }))
    }


    return <div className='roundModel mt-4 '>
        <div className="row">
            <div className="col">
                <h3>Round Model</h3>
            </div>
            <div className="col">
                <button type="button" className='btn btn-primary btn-sm'>Удалить слайд</button>
            </div>
        </div>

        <TextArea value={data.sound} onChange={handleChange} name={"textArea"}></TextArea>

        <BeforeQuestionSlide />

        <BeforeAnswerSlide />

        <QuestionSlide />

    </div>
}