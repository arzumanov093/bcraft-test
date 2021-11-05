import { useState } from 'react';
import './Input.css'

const Input = () => {

    // const inputHandler = (e) => {
    //     const canvas = document.createElement('canvas');
    //     canvas.toBlob((blob) => {
    //         const newImg = document.createElement('img'),
    //               url = URL.createObjectURL(blob)

    //         newImg.onload = () => {
    //             URL.revokeObjectURL(url)
    //         }
    //         newImg.src = url;
    //         document.body.appendChild(newImg)

    //         console.log(newImg)
    //     })
    // }

    const onChange = (e) => {
        // let file = e.target.files[0];

        // let reader = new FileReader();
        // reader.readAsText(file)

        // reader.onload = function() {
        //     console.log(reader.result)
        // }
        console.log(e.target.files)
    }

    return(

        <div className='file-wrapper'>
            <input
                type='file'
                multiple
                className='file'
                name='file'
                accept=".jpg, .png"
                onChange={(e) => onChange(e)}
            />
            <div className='file-btn'>Выбрать</div>
            <div className='file-wrapper'>

            </div>
            {/* <canvas id='canvas'>
                <img src='bu3KJg.jpg'/>
            </canvas> */}
        </div>

    )
}

export default Input;