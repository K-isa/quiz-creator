import React, { useState } from 'react';
import { ChapterModel } from './chapter-model';
import { RoundModels } from './round-model/round-model';
import { AddModule } from './items/add-module';
import { TextArea } from './items/text-area';

export function QuizPage() {
    const [data, setData] = useState({name: ''})

    const handleChange = ({ target }) => {
        setData((prevstate) => ({ ...prevstate, [target.name]: target.value }))
    }
    
    return <>
        <div className='container'>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-6">
                    
                <TextArea value={data.name} onChange={handleChange} name={"name"} />

                    <h1 className='mt-2'>Разделы</h1>

                    <ChapterModel/>
{/* 
                    <RoundModels />

                    <AddModule/> */}
                </div>
            </div>
        </div>
    </>
}