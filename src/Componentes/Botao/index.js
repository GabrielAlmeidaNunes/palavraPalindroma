import styled from "styled-components"

export const Botao = styled.button `
    width:${props=> props.tamanho || '50%'};
    margin: 0 auto;
    padding:5px;
    border-radius: 10px;
    

    &:hover{
        cursor: pointer;
        background: green;
        color:white;
    }
`