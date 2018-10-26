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

class Campo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            erro: ''
        }

        //this.valida = this.valida.bind(this)
    }

    valida = (evento) => {
        const alvo = evento.target

        if (alvo.name === 'nome'&& alvo.value === ''){
            const state = {
                erro: 'Campo obrigatório'
            }
            this.setState(state)
        }
    }

    render(){
        return(
            <div>
            <input 
                id={this.props.id}
                className = "caixa-texto"
                type={this.props.type}
                name={this.props.name}
                placeholder={this.props.placeholder}
                onChange={this.valida}>
            </input>

            <p className = "grupo__erro">
            {this.state.erro}
            </p>
            </div>
            )        
        }
    }


export default Campo



//relembrando classe
//class Pessoa{

//}

//const camis = new 

//class Paciente extends Pessoa{
  //  constructor (nomeRecebido, sobrenomeRecebido, pesoRecebido, alturaReccebida){
        //super(nomeRecebido, sobrenomeRecebido)
      //  this.peso = pesoRecebido
    //    this.altura = alturaReccebida
  //  }
//}

//const maria = new Paciente('Camila', 'Belo', 54, 170)

//class Animal {
    //constructor(racaRecebido, anosRecebido, foiVacinado){
    //this.raca = racaRecebido
    //this.anos = anosRecebido
    //this.vacinado = foiVacinado    
    //}

    //vacinar() {
    //    this.vacinado = true
  //  }
//}

//const maggie 

//maggie.vacinar()


//chamar evento onchange validar, semelhante click