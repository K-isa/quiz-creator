import React, {useState} from 'react';
import { SelectedField } from '../items/SelectedField';
import { TextField } from '../items/textField';

export function TitleSLideModel() {
    const [data, setData] = useState({TextField: '', sound: ''})

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

            <TextField value={data.textArea} onChange={handleChange} name={"TextField"}/>

            <SelectedField />

            <TextField value={data.sound} onChange={handleChange} name={"sound"}></TextField>

        </div>
    </>
}