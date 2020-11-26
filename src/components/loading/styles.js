import styled from 'styled-components';

export const CustomLoading = styled.div`
    position:fixed;
    z-index:1000;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.8);
    display:flex;
    align-items:center;
    justify-content:center;

    svg{
        width:100px;
        height:100px;
    }
`