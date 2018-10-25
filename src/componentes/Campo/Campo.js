import React from 'react'
import './Campo.css'

/*<Campo id="senha" type="password" name= "senha" placeholder ="..."
const propos  = {
    id: 'senha',
    type: 'password'    
    name: 'senha'
    placeholder: '...'
}    
*/

function Campo(props){
    return(
        <input 
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}>
        </input>
    )
}

export default Campo