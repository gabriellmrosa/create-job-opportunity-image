import React from 'react';
import CustomTextArea from '../CustomTextArea'
import { ContainerDiv, Global } from './styles'
import { FiMapPin, FiMail, FiUpload } from 'react-icons/fi'

const ContainerJobOpportunity = ({
    setHistorySave, 
    historySave,  
    inputError, 
    customRefFinalImageCanvas, 
    customRefInputLogo
})=>{

    const verifyLogo = (event)=>{
        let inputValue = event.target;

        if (inputValue.files && inputValue.files[0]) {

            let reader = new FileReader();
      
            reader.readAsDataURL(inputValue.files[0]);
            // reader.onloadstart = () => {                
            // }
            reader.onload = (event) => {
                setHistorySave( old => ( {...old, momentLayout: {...old.momentLayout, logo:event.target.result}} )) 
            };
      
          }
    }

    return (
        <Global>
            <div ref={customRefFinalImageCanvas} className="control-bug-container">
                <ContainerDiv layout={historySave.momentLayout.layout} logo={historySave.momentLayout.logo}>

                    <img className="logo" src={historySave.momentLayout.logo} alt="Logo Empresa"/>                

                    <label className={`fake-input-image ${!historySave.momentLayout.logo && inputError.highlightLogo ? 'error':''}`} ref={customRefInputLogo}>
                        <input type="file" id="input-image-logo" onChange={(event)=>verifyLogo(event)}/>
                        { historySave.momentLayout.logo ?
                            <FiUpload size={14}/>
                        :   
                            <>
                                <p>Logo</p>
                                <FiUpload size={14}/>
                            </>
                        }
                    </label>
                
                        <CustomTextArea 
                            className={`opportunity-title ${ !historySave.momentLayout.texts.title && inputError.highlightTitle ? 'error' :''}`}
                            placeholder={'Digite aqui o título...'} 
                            sizeLarge={true} 
                            textAlign={'center'} 
                            setAutoFocus={true}                      
                            onChange={ (event)=>setHistorySave( old => ( {...old, momentLayout: {...old.momentLayout, texts: {...old.momentLayout.texts, title: event.target.value} }}  )) }
                        >
                            {historySave.momentLayout.texts && historySave.momentLayout.texts.title}
                        </CustomTextArea>
                
                    <div className="local-section">
                        <FiMapPin className="pin-map" size={20}/>
                        <h3>Local</h3>
                        <CustomTextArea 
                            className={`place ${!historySave.momentLayout.texts.place && inputError.highlightPlace ? 'error' :''}`}
                            placeholder={'Digite aqui o local de trabalho'} 
                            textAlign={'center'} 
                            onChange={ (event)=>setHistorySave( old => ( {...old, momentLayout: {...old.momentLayout, texts: {...old.momentLayout.texts, place: event.target.value} }}  )) }
                        >
                            {historySave.momentLayout.texts && historySave.momentLayout.texts.place}
                        </CustomTextArea>
                    </div>
            

                    <div className="details-section">

                        <h3>O que esperamos de você</h3>

                        <CustomTextArea 
                            className={`${!historySave.momentLayout.texts.whatWant && inputError.highlightWhatWant ? 'error' :''}`}
                            placeholder={'Digite aqui...'} 
                            textAlign={'left'} 
                            onChange={ (event)=>setHistorySave( old => ( {...old, momentLayout: {...old.momentLayout, texts: {...old.momentLayout.texts, whatWant: event.target.value} }}  )) }
                        >
                            {historySave.momentLayout.texts && historySave.momentLayout.texts.whatWant}
                        </CustomTextArea>
                        
                        <h3>O que oferecemos</h3>
                        <CustomTextArea 
                            className={`${!historySave.momentLayout.texts.whatOffer && inputError.highlightWhatOffer ? 'error' :''}`}
                            placeholder={'Digite aqui...'} 
                            textAlign={'left'} 
                            onChange={ (event)=>setHistorySave( old => ( {...old, momentLayout: {...old.momentLayout, texts: {...old.momentLayout.texts, whatOffer: event.target.value} }}  )) }
                        >
                            {historySave.momentLayout.texts && historySave.momentLayout.texts.whatOffer}
                        </CustomTextArea>
                    </div>


                    <div className="contact-section">
                        <FiMail size={20}/>
                        <h3>Enviar CV ou dúvidas para:</h3>
                        <CustomTextArea 
                            className={`contact-input ${!historySave.momentLayout.texts.contact && inputError.highlightContact ? 'error' :''}`}
                            placeholder={'Digite um email'} 
                            textAlign={'center'} 
                            onChange={ (event)=>setHistorySave( old => ( {...old, momentLayout: {...old.momentLayout, texts: {...old.momentLayout.texts, contact: event.target.value} }}  )) }
                        >
                            {historySave.momentLayout.texts && historySave.momentLayout.texts.contact}
                        </CustomTextArea>
                    </div>

                </ContainerDiv>
            </div>
        </Global>
    )
}

export default ContainerJobOpportunity;