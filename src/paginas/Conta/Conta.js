import React from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda';
import Campo from '../../componentes/Campo/Campo';
import './Conta.css'


function Conta(){
    return(
    <main className="conta">
    <h1>Conta</h1>
    <p>Envie o formulário para criar sua conta!</p>
    <Legenda htmlFor = "nome"> Nome:</Legenda>
    <Campo 
    id="nome"
    type="text"
    name="nome"
    placeholder="Nome completo"></Campo>

    <Legenda htmlFor = "Telefone"> Telefone:</Legenda>
    <Campo 
    id="telefone"
    type="tel"
    name="telefone"
    placeholder="telefone"></Campo>

    <Legenda htmlFor = "email"> Email:</Legenda>
    <Campo 
    id="email"
    type="email"
    name="email"
    placeholder="E-mail"></Campo>
    
    <Legenda htmlFor = "senha"> Senha:</Legenda>
    <Campo 
    id="senha"
    type="password"
    name="senha"
    placeholder="Senha"></Campo>
    
    
    <Botao>Enviar</Botao>
    <Link url="/conta">Criar uma conta</Link>
    <Link url="/login">Fazer login</Link>
    </main>
    )
}

export default Conta
