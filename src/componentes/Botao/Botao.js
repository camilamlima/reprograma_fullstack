import React from 'react'
import './Botao.css'

function Botao(props) {
  let classes = "botao";
  if (props.desabilitado === true) {
    classes += " botao--desabilitado";
  }
  return (
  <button className={classes}>
    {props.children}
  </button>);
}

export default Botao