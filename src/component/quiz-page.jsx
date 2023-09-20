import React from 'react';
import { ChapterModel } from './chapter-model';
import { InputForm } from './items/input-form';
import { RoundModels } from './round-model/round-model';
import { AddModule } from './items/add-module';

export function QuizPage() {
    return <>
        <div className='container'>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                    
                    <InputForm/>

                    <h1 className='mt-2'>Разделы</h1>

                    <ChapterModel/>

                    <RoundModels />

                    <AddModule/>
                </div>
            </div>
        </div>
    </>
}