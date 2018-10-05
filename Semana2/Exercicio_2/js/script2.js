const todosOsAlunos = document.querySelectorAll(".aluno");
//console.log(todosOsAlunos);

//const ana= "ana";
//const nat= "nat";
//const den= "den";

//const todosAsAlunas = ["ana","nat","den"];
//console.log(todasAsAlunas);

//for (let indice = 0; indice <todosOsAlunos.length; indice++){
for (let i=0; i < todosOsAlunos.length; i++){
    console.log(todosOsAlunos [i]);
    const aluno = todosOsAlunos[i];

//buscando o valor da primeira nota do primeiro aluno
const tdPrimeiraNota = aluno.querySelector(".info-notaum");
const primeiraNota = tdPrimeiraNota.textContent;

//buscando o valor da segunda nota do primeiro aluno
const tdSegundaNota = aluno.querySelector(".info-notadois");
const segundaNota = tdSegundaNota.textContent;

const mediaFinal = aluno.querySelector(".info-media");
const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) /2;

mediaFinal.textContent = mediaCalculada.toFixed(2);
}

const form = document.querySelector("#form-adiciona");
const btnAdicionar = document.querySelector("#adicionar-aluno");

btnAdicionar.addEventListener('click',function(event){
    event.preventDefault();

    const nome= document.getElementById("nome");
    const notaUm= document.getElementById("notaum");
    const notaDois= document.getElementById("notadois");

    const alunoTr = document.createElement("tr");
    const tabela = document.querySelector("#tabela-alunos");

    const nomeTd = document.createElement("td");
    nomeTd.textContent= nome.value;
    alunoTr.appendChild (nomeTd);

    const notaUmTd = document.createElement("td");
    notaUmTd.textContent= notaUm.value;
    alunoTr.appendChild (notaUmTd);

    const notaDoisTd = document.createElement("td");
    notaDoisTd.textContent = notaDois.value;
    alunoTr.appendChild (notaDoisTd);

    const mediaTd = document.createElement("td");

    const mediaCalculada = (parseFloat(notaUm.value)+parseFloat(notaDois.value))/2;
    
    mediaTd.textContent = mediaCalculada.toFixed(2);
    alunoTr.appendChild (mediaTd)

    tabela.appendChild(alunoTr)

    form.reset()
});

