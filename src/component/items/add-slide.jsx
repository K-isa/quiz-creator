import React from 'react';

export function AddSlide() {
    return <div className="row mt-4">
            <div className="col">
                <select className="form-select mt-3" style={{ width: '200px' }} aria-label="Default select example">
                    <option selected>OnlySlideModel</option>
                    <option value="1">BaseCommonSlideModel</option>
                    <option value="2">TitleSlideModel</option>
                    <option value="3">SimpleSlideModel</option>
                    <option value="4">AnimatedSimpleSlideModel</option>
                    <option value="5">BaseQuestionModel</option>
                    <option value="6">ChoicesModel</option>
                    <option value="7">QuestionChoicesModel</option>
                    <option value="8">QuestionModel</option>
                    <option value="9">QuestionEmojiModel</option>
                </select>

            </div>

            <div className="col mt-3">
                <button type="button" className='btn btn-primary btn-sm'>Добавить слайд</button>
            </div>
        </div>
}