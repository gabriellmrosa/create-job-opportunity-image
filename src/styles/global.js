import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
    }

    body{
        background: #fafafa;
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
        color:#2b2b2b;
        overscroll-behavior: contain;
    }
    p,h2{
        color: #636363 ;
    }
    
    body, input, button, textarea{
        font: 16px Roboto, sans-serif;
    }
    
    button{
        cursor:pointer;
    }
    li{
        list-style:none;
    }

    .cta-home{display:none;}
    .cta-menu{display:flex;}
    @media(max-width: 600px){
        .cta-home{display:flex;}
        .cta-menu{display:none;}
    }

`;