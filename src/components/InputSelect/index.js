import React, {useState, useRef, useEffect} from 'react'
import { FiChevronDown, FiX} from 'react-icons/fi'
import { CustomSelect } from './styles';
import './styles.js'

const InputSelect = ({historySaveLayouts, setHistorySave}) =>{

    const containerFakeSelect = useRef(null);

    const [selected, setSelected] = useState('Selecione')
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        document.addEventListener("click", (event) => {
            const targetElement = event.target;
    
            if(!targetElement.classList.contains('select-family')){
                setOpen(false)
            }
    
        });
    },[])
    
    const handleDelete = (index)=>{
        const copyArray = historySaveLayouts;
        copyArray.splice(index,1)
        setHistorySave((old)=>({...old, layouts: copyArray }))
    }

    const selectOption = (text, index) =>{
        setSelected(text)
        setHistorySave((old)=>({...old, momentLayout: old.layouts[index]}))

        if(open === true){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }

    const controlFakeSelect = () =>{
        if(open === true){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }


    return(

            <CustomSelect ref={containerFakeSelect} className={`container-fake-select select-family ${open ? 'active': ''}`}>
                <label className={`select-family fake-select ${open ? '-active': ''}`} onClick={()=>controlFakeSelect()}>
                    <span className="noselect select-family">{selected}</span>
                    <FiChevronDown  size={24} className={`select-family ${open ? '-active' : ''}`}/>
                </label>

                <div className={`select-family fake-body-options ${open ? '-active': ''} `}>
                    {historySaveLayouts.map( (element, index) =>(  
                            <div className={'select-family'} key={index}>
                                <label onClick={()=>selectOption(element.texts.title, index)} className="noselect select-family">
                                    {element.texts.title}
                                </label>
                                <button className={'select-family'} type="button" onClick={ ()=> handleDelete(index)}><FiX size={16}/></button>
                            </div> 
                        ))
                    }
                </div>
            </CustomSelect>
    )
}

export default InputSelect;