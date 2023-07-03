import { useState } from "react"
import styled from 'styled-components'
import {Input} from '../Input'
import { Botao } from '../Botao'
import {Titulo} from '../Titulo'


const PalindromoFormulario = styled.form `
 border:1px solid black;
 padding:16px;
 text-align:center;
 display:flex;
 flex-direction:column;
 row-gap:1em;
 border-radius:12px;
 width:100%;
`

const DivRisco = styled.div `

`


const Descricao = styled.p `

`

function VerificaPalindromo(){

    const [palindromo, setPalindromo] = useState ([])
   
    const [mostraPalavraPalindroma, setMostraPalavraPalindroma] = useState ([])

    const aoEnviar = (e)=>{

        e.preventDefault()
    
    }

    const pegaValor = (evento)=>{   
       
        setPalindromo(evento.target.value)
        setMostraPalavraPalindroma([])
           
    }

    const verifica = (e)=>{
        
        if(palindromo!=''){

            const palavraNormal = palindromo.toLowerCase()
            let palavraPalindroma = ''
            
            for(let i = palavraNormal.length-1 ; i >= 0 ; i--){
    
                 palavraPalindroma += palavraNormal[i]
            }
        
            (palavraPalindroma.toLowerCase() == palavraNormal) ? 
            setMostraPalavraPalindroma(`A palavra ${palindromo} é uma palavra palindroma`) : 
            setMostraPalavraPalindroma(`A palavra ${palindromo} não é uma palavra palindroma`)
    
            setPalindromo([])
           
            }
           
           
        }
  
    return(

        <PalindromoFormulario onSubmit={aoEnviar}>

            <Titulo fonte={1.5}>Palavra Palindromo</Titulo>
            <DivRisco>
                <hr></hr>
            </DivRisco>
            <Descricao>Descubra se a palavra é um palindromo</Descricao>
            <Input required onInput={evento=>pegaValor(evento)}></Input>
            <Botao onClick={verifica}>Verificar</Botao> 
            <p>{mostraPalavraPalindroma}</p>

        </PalindromoFormulario>

    )
}

export default VerificaPalindromo