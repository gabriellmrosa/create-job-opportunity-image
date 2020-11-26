import React from 'react'
import { ButtonCtaComponent } from './styles';
import { FiDownload } from 'react-icons/fi';
import './styles.js'

const ButtonCta = ({customClick, customClass = ''}) =>{
   
    return(
        <ButtonCtaComponent className={customClass}> 
          <button onClick={customClick}>Salvar e Download <FiDownload/></button>
        </ButtonCtaComponent>
    )
}

export default ButtonCta;