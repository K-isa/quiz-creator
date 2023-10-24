import React, { useState } from 'react';
import { SelectedField } from '../items/SelectedField';
import { TextArea } from '../items/text-area';


export function AnimatedSimpleSlideModel() {
    const [data, setData] = useState({ textArea: 'ПРИВЕТ! ЭТО КРЯКВА КВИЗ ДОБРО ПОЖАЛОВАТЬ НА ИГРУ', image: '', color: '', sound: '' })

    const handleChange = ({ target }) => {
        setData((prevstate) => ({ ...prevstate, [target.name]: target.value }))
    }

    return <>
        <div className="animatedSimpleSlideModel mt-4">
            <div className="row mt-3">
                <div className="col">
                    <h5>AnimatedSimpleSlideModel</h5>
                </div>
                <div className="col">
                    <button type="button" className='btn btn-primary btn-sm'>Удалить слайд</button>
                </div>
            </div>

            <TextArea value={data.textArea} onChange={handleChange} name={"textArea"}/>

            <TextArea value={data.image} onChange={handleChange} name={"image"} />

            <SelectedField value={data.color} onChange={handleChange} name={"color"}  />

            <TextArea value={data.sound} onChange={handleChange} name={"sound"} />

        </div>
    </>
}