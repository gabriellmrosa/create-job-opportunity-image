import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  0% {
    transform: translate(50%,-50%);
    opacity:0;
  }

  10% {
    transform: translate(0%,-50%);
    opacity:1;
  }

  90% {
    transform: translate(0%,-50%);
    opacity:1;
  }

  100% {
    transform: translate(100%, -50%);
    opacity:0;
  }
`;

export const ErrorMsg = styled.span`
  display:block;
  position:fixed;
  z-index: 500;
  transform: translate(-50%,0%);
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  border-radius:8px;
  padding:16px 24px;
  font-size:14px;
  animation: ${rotate} 2s linear both;
  bottom:80px;
  right:32px;

  @media(min-width: 1266px){
    & {
      bottom:80px;
      right:32px;
    }
  }
`  
