var btn_senha= document.querySelector("#btn_senha");

btn_senha.addEventListener('click', function(){
  var usuario = document.querySelector("#usuario").value;

  var senha = document.querySelector("#senha").value;

  if(usuario.length == 0){
    alert ("usuário inválido!");
  }
  if(senha > 6){
      alert("senha inválida!");
    }
  else{
    alert("usuário e senha ok!");  
  }
});

  function validacao(){
    var mulher = document.querySelector("#mulher").value;
    var poder = document.querySelector("#poder").value;
    var contato = document.querySelector("#contato").value;

    if(!mulher || !poder || !contato){
        alert("Por favor selecione uma alternativa")
        return false;
    }
  }

