import React, {useState} from 'react';
import { SelectedField } from '../items/SelectedField';
import { TextArea } from '../items/text-area';

export function TitleSLideModel() {
    const [data, setData] = useState({textArea: '', sound: ''})

    const handleChange = ({ target }) => {
        setData((prevstate) => ({ ...prevstate, [target.name]: target.value }))
    }

    return <>
        <div className="titleSlideModel mt-4">

            <div className="row mt-3">
                <div className="col">
                    <h5>TitleSlideModel</h5>
                </div>
                <div className="col">
            <button type="button" className='btn btn-primary btn-sm'>Удалить слайд</button>
        </div>
            </div>

            <TextArea value={data.textArea} onChange={handleChange} name={"textArea"}/>

            <SelectedField />

            <TextArea value={data.sound} onChange={handleChange} name={"sound"}></TextArea>

        </div>
    </>
}