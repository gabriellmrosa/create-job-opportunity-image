import styled from 'styled-components';

export const CustomSelect = styled.div`
    width:100%;
    position: relative;
    border:1px solid #c4c4c4;
    border-radius:4px;
    user-select: none;

    .fake-select{
        width: 100%;
        height: 43px;
        display: block;
        padding: 12px;
        font-size: 14px;
        width: 100%;
        outline: none;
    }
    .fake-select svg{ 
        position: absolute;
        right:12px;
        top:50%;
        transform: translate(0%,-50%);
        color:var(--color-black-light);
        transition: 300ms;
    }

    .fake-select svg.-active{ 
        transform: translate(0%,-50%) rotate(180deg);
    }

    &.active{
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    .fake-select.-active svg{
        color: var(--color-call-to-action-hover);
    }


    .fake-body-options{
        position: absolute;
        display: none;
        z-index: 5;
        width: 101%;
        max-height: 200px;
        overflow:auto;
        bottom:0px;
        left:-1px;
        transform: translate(0%,100%);
        background:#fff;
        border:1px solid #c4c4c4;
        border-bottom-right-radius:4px;
        border-bottom-left-radius:4px;
        button{
            background:none;
            border:none;
            padding:14px;
            svg{
                color: #2b2b2b;
                &:hover{
                    color:red;
                }
            }
        }
    }
    .fake-body-options div{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .fake-body-options label{
        padding:16px 16px;
        display: block;
        font-size: 12px;
        text-overflow: ellipsis;
        overflow: hidden; 
        white-space: nowrap;
    }
    .fake-body-options label:hover{
        background: #eee;
    }

    .fake-body-options.-active{
        display: block;
    }
`