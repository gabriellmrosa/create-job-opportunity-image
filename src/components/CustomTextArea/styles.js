import styled from 'styled-components';

export const TextArea = styled.textarea`
    resize: none;
    outline:none;
    border:none;
    background:none;
    font-size: ${({sizeLarge}) => sizeLarge ? '50px': '16px' };
    font-weight: ${({sizeLarge}) => sizeLarge ? 700: 400 };
    margin:0px;
    width:100%;
    height: ${({sizeLarge}) => sizeLarge ? '70px': '24px'};
    text-align: ${({textAlign}) => textAlign};
    overflow: hidden;
    overflow-wrap: break-word;
    padding:5px;
    color:#2b2b2b;

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: rgba(0,0,0,0.4)
    }
    
    &:focus{
        outline:2px dashed rgba(0,0,0,0.15);
    }

    &.title{
        text-align:center;
        font-size: 70px;
        font-weight:700;
        margin-bottom:16px;
    }
    &.address{
        text-align:center;
        margin-bottom:60px;
    }

`;