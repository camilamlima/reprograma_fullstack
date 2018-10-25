import React from 'react'
import './Legenda.css'

/*
<Legenda class for="email">E-mail:</Legenda>

const props ={ 
    className: 'legenda',
    htmlfor: 'email',
    children: 'Email:'
}
*/

function Legenda(props){
    return (<label className = "legenda" htmlFor = {props.htmlFor}>
    {props.children}
  </label>)
}

export default Legenda