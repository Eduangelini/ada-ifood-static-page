document.addEventListener("DOMContentLoaded", function () {
  const botaoAgradecimento = document.getElementById("botaoAgradecimento");

  botaoAgradecimento.addEventListener("click", function () {
    const mensagem = "Obrigado pela visita";
    alert(mensagem);
  });
});