
//const linkCriarUmaConta = <a class="link" href="/conta">Criar uma conta</a>
//const linkFazerLogin =  <a class="link" href="/login">Fazer login</a>

//const formularioLogin = (
  //<form>
  //  {[linkCriarUmaConta, linkFazerLogin]}
 // </form>
//)

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './paginas/Login/Login';

const divisaoProjeto = document.getElementById('projeto')

ReactDOM.render(<Login/> , divisaoProjeto)


//npm init -y (cria o package.json)
//npm install (baixa o node no aruqivo)
//npm install --save react (importa react)
//npm install --save react-dom (importa o dom)
//npm install --save react-scripts (importa script - Babel)
//export default só pode ser usado uma vez
//export deve ser chamado em cada função
