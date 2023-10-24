import React, {useState} from 'react';
import { SelectedField } from '../items/SelectedField';
import { TextField } from '../items/textField';
export function QuestionChoicesModel() {
    const [data, setData] = useState({TextField: '', image: '', color: '', sound: ''})

    const handleChange = ({ target }) => {
        setData((prevstate) => ({ ...prevstate, [target.name]: target.value }))
    }

    return <>
    <div className="questionChoicesModel mt-4">

        <div className="row mt-3">
            <div className="col">
                <h5>QuestionChoicesModel</h5>
            </div>
            <div className="col">
            <button type="button" className='btn btn-primary btn-sm'>Удалить слайд</button>
        </div>
        </div>

        <TextField value={data.TextField} onChange={handleChange} name={"TextField"}/>

        <SelectedField value={data.color} onChange={handleChange} name={"color"}/>

        <TextField value={data.sound} onChange={handleChange} name={"TextField"}></TextField>

    </div>
</>
}