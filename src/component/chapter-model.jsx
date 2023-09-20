import React from 'react';
import { DeleteButton } from './items/delete-button';
import { SlideSound } from './items/slide-sound';
import { PrototypeSlide } from './items/prototype-slide';
import {AddSlide} from './items/add-slide'
import { TitleSLideModel } from './slides/titleSlideModel';
import { AnimatedSimpleSlideModel } from './slides/animatedSimpleSlideModel';

export function ChapterModel() {
    return <div className='chapterModel mt-4'>
            <div className="row">
                <div className="col">
                    <h3>Chapter Model</h3>
                </div>
                <DeleteButton/>
            </div>

            <SlideSound/>

            <TitleSLideModel />

            <AnimatedSimpleSlideModel />

                <AddSlide />

            </div>
}