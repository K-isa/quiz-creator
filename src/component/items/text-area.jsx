import React from 'react';

export function TextArea() {
    return <>
        <div className="form-floating mt-3">
            <textarea className="form-control" placeholder="ПРИВЕТ! ЭТО КРЯКВА КВИЗ ДОБРО ПОЖАЛОВАТЬ НА ИГРУ" id="floatingTextarea2" style={{ height: '100%' }}></textarea>
            <label for="floatingTextarea2">Текст слайда</label>
        </div>
    </>
}