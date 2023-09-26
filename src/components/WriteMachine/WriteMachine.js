import { useEffect, useState } from "react";
import './WriteMachine.css';


import React from 'react'

const WriteMachine = (props) => {
    const [text, setText] = useState("");
    
    const writeScreen =(text, i = 0 ) => {
            if (i < text.length) {
                setText(text.slice(0, i + 1));
                setTimeout(() => writeScreen(text, i + 1), 100);

            }
    };

    useEffect(() =>  {
        setTimeout(() => writeScreen(props.text))  
    }, []);
        
    return (
        <div className='write-machine'>

            {text}
        </div>
    )
}

export default WriteMachine;
export { WriteMachine };