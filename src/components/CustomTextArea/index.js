import React, {useEffect, useRef} from 'react';
import { TextArea } from './styles'
import autosize from 'autosize';

const CustomTextArea = ({ children , placeholder, sizeLarge, textAlign, setAutoFocus, className, onChange = ()=>{} })=>{

    const refTextarea = useRef(null);

    useEffect(()=>{
        autosize(refTextarea.current)
    },[])
  
    return (
       <TextArea
            value={children}
            className={className}
            placeholder={placeholder} 
            sizeLarge={sizeLarge} 
            ref={refTextarea} 
            textAlign={textAlign} 
            spellCheck={'false'}
            autoFocus={setAutoFocus && setAutoFocus}
            onChange={onChange}
        >
            {children}
        </TextArea>
    )
}

export default CustomTextArea;