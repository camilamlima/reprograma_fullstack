var btn = document.querySelector("#btn_login")

btn.addEventListener('click', function (event){

	event.preventDefault();

	var mensagem = document.querySelector("#mensagem");

	var usuario = document.querySelector("#usuario").value;
	var senha = document.querySelector("#senha").value;

	if(usuario =="admin" && senha=="admin"){
		mensagem.textContent = "Sucesso";
		mensagem.classList.add("sucesso");
	}else{
		mensagem.textContent = "Erro";
		mensagem.classList.add("erro");
	}
});
