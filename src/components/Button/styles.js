import styled from 'styled-components';

export const ButtonCtaComponent = styled.div`
    position:fixed;
    bottom:0px;
    left:0px;
    width:100%;
    height:auto;
    padding:24px 32px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#fff;
    @media(max-width: 500px){
      box-shadow: 0px -5px 10px rgba(0,0,0,0.1);
    }

    button{
        display:flex;
        align-items:center;
        justify-content:center;;
        border:none;
        background:#1d9b43;
        color:#fff;
        padding:16px 24px;
        cursor:pointer;
        font-size:18px;
        transition:200ms;
        width:100%;
        border-radius:4px;
        &:hover{
          background:#18ba49;
          transform:scale(1.05);
        }
        svg{
          margin-left:8px;
        }
    }
`