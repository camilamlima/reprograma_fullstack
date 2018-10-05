//buscando o aluno pelo id
const aluno = document.querySelector("#primeiro-da-lista");

//buscando o valor da primeira nota do primeiro aluno
const tdPrimeiraNota = aluno.querySelector(".info-notaum");
const primeiraNota = tdPrimeiraNota.textContent;

//buscando o valor da segunda nota do primeiro aluno
const tdSegundaNota = aluno.querySelector(".info-notadois");
const segundaNota = tdSegundaNota.textContent;

const mediaFinal = aluno.querySelector(".info-media");
const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) /2;

mediaFinal.textContent = mediaCalculada;



