import styled from 'styled-components';

export const DownloadImage = styled.div`
  position:fixed;
  z-index: 100;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding:30px;
  top:0px;
  right: 0px;
  transform: ${({openMenu})=> openMenu ? 'translate(0%,0%)': 'translate(80%,0%)'};
  width: 100%;
  max-width:300px;
  height: 100%;
  background: #fff;
  box-shadow: 0px 1px 3px rgba(0,0,0,.1);
  transition: 300ms;
  @media(max-width: 500px){
    max-width:100%;
  }
  h1{
    font-size:24px;
    margin-bottom:16px;
  }
  h2{
    margin-bottom:40px;
    font-size:14px;
    font-weight:400;
    line-height: 1.5;
  }
  h4{
    margin-bottom:16px;
  }


  ul{
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
  }

  li{
    width:48%;
    margin-bottom:8px;
    user-select: none;
  }

  label{
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;

    input{
      display:none;
    }

    input:checked + p:after{
      content:'✓';
      font-weight:700;
      position:absolute;
      top:-6px;
      right:-6px;
      color: #2b2b2b;
      background:#fff;
      border-radius:50%;
      width:20px;
      height: 20px;
      box-shadow:0px 2px 5px rgba(0,0,0,0.5);
    }
    input:checked + p{
      border: 1px solid rgba(0,0,0,0.1);
    }

    p{
      position:relative;
      width:100%;
      height:auto;
      box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
      border-radius:8px;
      text-align:center;
      cursor:pointer;
      padding:24px 24px;
      background:#fff;
      color:#fff;
      border:1px solid #fff;
    }
    p.white{
      color:#2b2b2b;
    }
    p.black{
      background: rgb(26,26,26);
      background: linear-gradient(180deg, rgba(26,26,26,1) 0%, rgba(8,8,8,1) 100%);
    }
    p.blue{
      background: rgb(25,51,105);
      background: linear-gradient(180deg, rgba(25,51,105,1) 0%, rgba(20,39,78,1) 100%);
    }
    p.volcano{
      background: rgb(251,168,32);
      background: linear-gradient(180deg, rgba(251,168,32,1) 0%, rgba(255,73,73,1) 38%, rgba(48,34,51,1) 82%, rgba(29,31,44,1) 100%);
    }
    p.dracula{
      background: #282a36;
    }
    p.green{
      background: rgb(96,203,138);
      background: linear-gradient(180deg, rgba(96,203,138,1) 0%, rgba(28,135,20,1) 36%, rgba(42,101,34,1) 64%, rgba(12,57,9,1) 100%);
    }

  }

  .container-save-models{
    margin:32px 0px;
    width:100%;
  }

  .no-save-models{
    background:#f4f4f4;
    font-size:14px;
    padding:16px 24px;
    border-radius:8px;
  }

  .button-hide{display:none;}
  @media(max-width: 1270px) {
    
    &{
      transform:${({openMenu})=> openMenu ? 'translate(100%,0%)': 'translate(0%,0%)'};
    }
    .button-hide {
      display:flex;
      background:none;
      border:none;
      border-bottom-left-radius:8px;
      margin-bottom:32px;
      background:#fff;
      padding:${({openMenu})=> openMenu ? '16px': '4px'};
      transition:300ms;
      box-shadow:${({openMenu})=> openMenu ? '2px 2px 5px rgba(0,0,0,0.1)': '2px 2px 5px rgba(0,0,0,0)'};
      transform:${({openMenu})=> openMenu ? 'translate(-150%,-60%)': 'translate(0%,0%)'};
    }
  }
`;

