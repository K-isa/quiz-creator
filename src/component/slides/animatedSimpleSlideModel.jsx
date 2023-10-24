import React, { useState } from 'react';
import { SelectedField } from '../items/SelectedField';
import { TextField } from '../items/textField';


export function AnimatedSimpleSlideModel() {
    const [data, setData] = useState({ TextField: 'ПРИВЕТ! ЭТО КРЯКВА КВИЗ ДОБРО ПОЖАЛОВАТЬ НА ИГРУ', image: '', color: '', sound: '' })

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

            <TextField value={data.TextField} onChange={handleChange} name={"TextField"}/>

            <TextField value={data.image} onChange={handleChange} name={"image"} />

            <SelectedField value={data.color} onChange={handleChange} name={"color"}  />

            <TextField value={data.sound} onChange={handleChange} name={"sound"} />

        </div>
    </>
}