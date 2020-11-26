import styled, {css} from 'styled-components';

export const Global = styled.div`
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:50px 0px;
    width:100%;
    overflow:auto;
    .control-bug-container{
        width:673px;
        height: auto;
        padding:30px 10px 15px;
    }
    @media(max-width: 675px){
        & {
            margin-bottom:200px;
        }
        .control-bug-container{
            width:95%;
            padding:30px 5px 5px;
        }
    }
`

export const ContainerDiv = styled.div`
    position:relative;
    display: flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:flex-start;
    width:650px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 5px 5px rgba(0,0,0,0.1);
    padding: 40px;
    @media(max-width: 675px){
        &{
            width:100%;
        }
    }
    ${({layout}) => 
        layout === 'white' ? 
            css`background: #fff;`
            :
        layout === 'black' ? 
            css`background: rgb(26,26,26);
                background: linear-gradient(180deg, rgba(26,26,26,1) 0%, rgba(8,8,8,1) 100%);
                `
            :
        layout === 'blue'  ? 
            css`background:#163a66;
                `
            :
        layout === 'dracula' ? 
            css`background: #282a36;`
            :
        layout === 'volcano' ? 
            css`background: rgb(251,168,32);
                background: linear-gradient(180deg, rgba(251,168,32,1) 0%, rgba(255,73,73,1) 38%, rgba(48,34,51,1) 82%, rgba(29,31,44,1) 100%);
                `
            :
        layout === 'green' ? 
            css`background: rgb(96,203,138);
                background: linear-gradient(180deg, rgba(96,203,138,1) 0%, rgba(28,135,20,1) 36%, rgba(42,101,34,1) 64%, rgba(12,57,9,1) 100%);
                `
            :
            css`background: #000;`
    }

    & p, 
    & h3, 
    & h4, 
    & textarea, 
    & svg{
        ${({layout}) => 
        layout === 'white' ? 
            css`color: #2b2b2b;`
         :
        layout === 'black' ?  
            css`color: #fff;`
         :
        layout === 'blue' ? 
            css`color: #fff`
            :
        layout === 'dracula' ? 
            css`color: #f8f8f2;`
            :
        layout === 'volcano' ? 
            css`color: #fff;`
            :
        layout === 'green' ? 
            css`color: #fff;`
            :
            css`color: #ffff;`
        }
    }
    
    ${({layout}) => layout === 'dracula' && 
    `   
        & .opportunity-title{
            color: #ff79c6;
        }
        & h3, & h4{
            color: #9580ff;
        }
        & svg, & .place, & .contact-input{
            color: #50fa7b;
        }
    `
    }

    ${({layout}) => layout === 'black' && 
        `   
            & svg, & .place, & .contact-input{
                color: #ffd700
            }
        `
    }

    ${({layout}) => layout === 'blue' && 
        `   
            & svg, & .place, & .contact-input{
                color: #34E9ED;
            }
        `
    }

    ${({layout}) => layout !== 'white' && 
        `& textarea::placeholder {
            color: rgba(255,255,255,.5);
        }
        & textarea:focus {
            outline:2px dashed rgba(255,255,255,.1)
        }
        `
    }

    & .fake-input-image svg, & .fake-input-image p{
        color:#2b2b2b;
    }

    .opportunity-title{
        margin-bottom:24px;
        @media(max-width: 675px){
            &{
               font-size:30px;
            }
        }
    }
    
    .fake-input-image{
        position:absolute;
        z-index: 50;
        top: ${({logo}) => logo !== undefined ? '-4%' : '0%' }; 
        left: ${({logo}) => logo !== undefined ? '58%' : '50%' }; 
        transform: translate(-50%, -50%);
        cursor:pointer;
        background: #fff;
        padding: ${({logo}) => logo !== undefined ? '16px' : '20px' };
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        width: ${({logo}) => logo !== undefined ? '0px' : '60px' };
        height:${({logo}) => logo !== undefined ? '0px' : '60px' };
        box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
        border: ${({logo}) => logo !== undefined ? '2px dashed rgba(0,0,0,0);' : '2px dashed rgba(0,0,0,0.2);' }; 
        transition:300ms;
        &:hover{
            border:2px dashed #000;
        }
        &:hover p, &:hover svg {
            color: #000;
        }
        p{
            position:absolute;
            font-size:14px;
            bottom:35%;
            left:50%;
            transform: translate(-50%, -50%);
            color:rgba(0,0,0,.7);
            user-select: none; 
        }
        svg{
            position: absolute;
            bottom: ${({logo}) => logo !== undefined ? '50%' : '8px;' }; 
            left: 50%;
            ${({logo}) => logo !== undefined && 'width:20px;' }; 
            transform: ${({logo}) => logo !== undefined ? 'translate(-50%, 50%);' : 'translate(-50%, 0%);' }; 
            color: rgba(0,0,0,.7);
        }

        input{display:none;}

        &.error{
            border:2px dashed red;
        }
    }
    
    img.logo{
        position:absolute;
        z-index: 10;
        width:auto;
        height:auto;
        max-height: 50px;
        max-width: 200px;
        margin:0px auto;
        top:0px;
        left:50%;
        transform: ${({logo}) => logo !== undefined ? 'translate(-50%,-50%)' : 'translate(-50%, 0%)' }; 
        opacity: ${({logo}) => logo !== undefined ? 1 : 0}; 
        pointer-events: ${({logo}) => logo !== undefined ? 'auto' : 'none'};
        transition:300ms;
    }

    .pin-map{
       margin:0px auto;
    }

    .place{
        margin-bottom:32px;
    }

    .details-section{
        margin:32px 0px;

        h3{
            margin-bottom:8px;
        }
        textarea{
            margin-left:8px;
            min-height:80px;
        }
        & > textarea{
            margin-bottom:24px;
        }
    }

    .contact-section, .local-section{
        display:flex;
        align-items:center;
        flex-direction:column;
        h3{
            text-align:center;
        }
        @media(max-width: 675px){
            h3{
                font-size:16px;
            }
        }
    }

    textarea.error{
        border:2px dashed red;
    }
`;