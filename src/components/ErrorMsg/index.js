import React from 'react';
import { ErrorMsg } from './styles'

const ErrorMsgComponent = ({inputError})=>{

    return (
        <ErrorMsg>
            {inputError.highlightLogo ? 'Adicione o logo' : 'Faltou Preencher o campo em vermelho'}
        </ErrorMsg>
    )
}

export default ErrorMsgComponent;