import React, {useState, useEffect, useRef} from 'react';
import ContainerJobOpportunity from './components/ContainerJobOpportunity'
import DownloadImageComponent from './components/DownloadImageComponent'
import ErrorMsg from './components/ErrorMsg';
import GlobalStyle from './styles/global';
import Loading from './components/loading';
import ButtonCta from './components/Button'

import * as htmlToImage from 'html-to-image';
import saveAs from 'file-saver'

const App = ()=>{

  const finalImageCanvas = useRef(null);
  const inputLogo = useRef(null);

  const [loading, setLoading] = useState(false);

  const [inputError, setInputError] = useState(false);

  const [historySave, setHistorySave] = useState(()=>{
    
      if(localStorage.getItem('@historySave')){
        return JSON.parse(localStorage.getItem('@historySave'))
      }

      return {layouts:[], momentLayout:{layout:'white',texts:{ whatWant:'• Ex: Conhecimento em word', whatOffer:'• Ex: Remuneração alta'}}}
    }
  );

  const waitAnimation = async (time, callbackFunc, parameterCallBack)=>{
    await new Promise(res => setTimeout(res, time));
    callbackFunc(parameterCallBack)
  } 

  const validations = async ()=>{

    if(!historySave.momentLayout.logo){ 
      setInputError({msg: true, highlightLogo: true})
      waitAnimation(2001, setInputError, {msg: false, highlightLogo: true})

    }else if(!historySave.momentLayout.texts.title){ 
      setInputError({msg: true, highlightTitle: true})
      waitAnimation(2001, setInputError, {msg: false, highlightTitle: true})

    }else if(!historySave.momentLayout.texts.place){
      setInputError({msg: true, highlightPlace: true})
      waitAnimation(2001, setInputError, {msg: false, highlightPlace: true})

    }else if(!historySave.momentLayout.texts.whatWant){
      setInputError({msg: true, highlightWhatWant: true})
      waitAnimation(2001, setInputError, {msg: false, highlightWhatWant: true})

    }else if(!historySave.momentLayout.texts.whatOffer){
      setInputError({msg: true, highlightWhatOffer: true})
      waitAnimation(2001, setInputError, {msg: false, highlightWhatOffer: true})

    }else if(!historySave.momentLayout.texts.contact){
      setInputError({msg: true, highlightContact: true})
      waitAnimation(2001, setInputError, {msg: false, highlightContact: true})

    }else{

      inputLogo.current.style.opacity = 0;
      await new Promise(res => setTimeout(res, 301));

      setLoading(true)
      htmlToImage.toBlob(finalImageCanvas.current).then(function (blob) {
        
        window.saveAs(blob, 'minha-imagem.png');
        setHistorySave((old)=>({...old, layouts:[...old.layouts, historySave.momentLayout]}))

        inputLogo.current.style.opacity = 1;
        setLoading(false)
      });
    }
  }

  useEffect(()=>{
      localStorage.setItem('@historySave', JSON.stringify(historySave));
  },[historySave])


  return(
      <>
        {inputError.msg && <ErrorMsg inputError={inputError}/>}

        <ContainerJobOpportunity 
          customRefFinalImageCanvas={finalImageCanvas}
          customRefInputLogo={inputLogo}
          historySave={historySave}
          setHistorySave={setHistorySave}
          inputError={inputError}
        />
        <DownloadImageComponent 
          historySave={historySave}
          setHistorySave={setHistorySave}
          validations={validations} 
        />  

        <ButtonCta customClass={'cta-home'} className="cta-home" customClick={()=>validations()}/>
        {loading &&< Loading/>}
        <GlobalStyle/>
      </>
    );
}

export default App;
