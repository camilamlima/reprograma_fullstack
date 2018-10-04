const button = document.querySelector(".transacao__button");

button.addEventListener('click',function(event) {
    event.preventDefault();

    const tabela = document.querySelector(".extrato__table");
    const linha = document.createElement("tr");    
    
    const inputName = document.getElementById("transacaoInputName");
    const inputMoney = document.getElementById("transacaoInputMoney");
    const inputDate = document.getElementById("transacaoInputDate");

    

    const colunaNome = document.createElement("td");
    const colunaNomeTexto = document.createTextNode(inputName.value);
    colunaNome.appendChild(colunaNomeTexto);

    const colunaValor = document.createElement("td");
    const colunaValorTexto = document.createTextNode(inputMoney.value);
    colunaValor.appendChild(colunaValorTexto)

    const colunaData = document.createElement("td");
    const colunaDataTexto = document.createTextNode(inputDate.value);
    colunaData.appendChild(colunaDataTexto);

    linha.appendChild(colunaNome);
    linha.appendChild(colunaValor);
    linha.appendChild(colunaData);

    tabela.appendChild(linha);
})


var re = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;  
      function colunaNome(inputName){  
        var OK = re.exec(inputName.value);  
        if (!OK)  
          window.alert(RegExp.input + " Não pode  é um número de telefone com código de área!");  
        else
          window.alert("Obrigado, o seu número de telefone é " + OK[0]);  
      }  