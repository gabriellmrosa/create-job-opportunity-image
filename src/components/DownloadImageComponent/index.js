import React, {useState} from 'react';
import { DownloadImage } from './styles';
import { FiMenu, FiChevronLeft} from 'react-icons/fi';
import InputSelect from '../InputSelect';
import ButtonCta from '../Button'

const DownloadImageComponent = ({
    validations,
    historySave,
    setHistorySave
})=>{

    const [openMenu, setOpenMenu] = useState(true);
    
    const handleClickLayout = (event)=> setHistorySave( old => ( {...old, momentLayout: {...old.momentLayout, layout:event.target.dataset.layout}}  ))

    const handleOpenCloseMenu = ()=> setOpenMenu((old)=> !old);

    return (
        <DownloadImage layout={historySave.momentLayout.layout} openMenu={openMenu} setOpenMenu={setOpenMenu}>

            <button type="button" className="button-hide" onClick={()=>handleOpenCloseMenu()}> { openMenu ? <FiMenu size={20}/> : <FiChevronLeft size={20}/> } </button>

            <div className="container-body">
                <h1>Criar Imagem de Vaga</h1>
                <h2>Adicione o logo da empresa digite os textos, escolha o layout e download!</h2>

                <h4>Selecione um layout</h4>

                <ul>
                    <li>
                        <label>
                            <input 
                                type="radio" 
                                data-layout="white" 
                                name="layout" 
                                defaultChecked={historySave.momentLayout.layout === 'white' ? true : false} 
                                onClick={(event)=>handleClickLayout(event)}
                            />
                            <p className="white">Branco</p>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input 
                                type="radio" 
                                data-layout="black" 
                                name="layout" 
                                defaultChecked={historySave.momentLayout.layout === 'black' ? true : false} 
                                onClick={(event)=>handleClickLayout(event)}
                            />
                            <p className="black">Preto</p>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input 
                                type="radio" 
                                data-layout="blue" 
                                name="layout" 
                                defaultChecked={historySave.momentLayout.layout === 'blue' ? true : false} 
                                onClick={(event)=>handleClickLayout(event)}
                            />
                            <p className="blue">Azul</p>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input 
                                type="radio" 
                                data-layout="volcano" 
                                name="layout" 
                                defaultChecked={historySave.momentLayout.layout === 'volcano' ? true : false} 
                                onClick={(event)=>handleClickLayout(event)}
                            />
                            <p className="volcano">Vulcão</p>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input 
                                type="radio" 
                                data-layout="dracula" 
                                name="layout" 
                                defaultChecked={historySave.momentLayout.layout === 'dracula' ? true : false} 
                                onClick={(event)=>handleClickLayout(event)}
                            />
                            <p className="dracula">Drácula</p>
                        </label>
                    </li>
                </ul>

                <div className="container-save-models">
                    <h4>Modelos salvos</h4>
                    { historySave.layouts.length > 0 ?
                        <InputSelect historySaveLayouts={historySave.layouts} setHistorySave={setHistorySave} />
                        :
                        <div className="no-save-models">
                            <p>Nenhum modelo salvo ainda</p>
                        </div>
                    }
                </div>
            </div>
            
            <div className="container-button">
                <ButtonCta customClass={'cta-menu'} customClick={()=>validations()}/>
            </div>
        </DownloadImage>
    )
}

export default DownloadImageComponent;