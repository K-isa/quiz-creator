import React from 'react';
import {AddSlide} from './items/add-slide'
import { TitleSLideModel } from './slides/titleSlideModel';
import { AnimatedSimpleSlideModel } from './slides/animatedSimpleSlideModel';

export function ChapterModel() {
    return <div className='chapterModel mt-4'>
            <div className="row">
                <div className="col">
                    <h3>Chapter Model</h3>
                </div>
                <div className="col">
            <button type="button" className='btn btn-primary btn-sm'>Удалить слайд</button>
        </div>
            </div>

            <TitleSLideModel />

            <AnimatedSimpleSlideModel />

                <AddSlide />

            </div>
}