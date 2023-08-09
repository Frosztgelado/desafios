function addCards() {
  var cards = [
    {
      title: "Desafio 1 - Calculadora",
      content:
        "Crie uma calculadora que possa realizar operações básicas como adição, subtração, multiplicação e divisão.",
      url: "desafios/1_Calculadora/1_calculadora.html",
    },{
      title: "Desafio 2 _ Jogo de adivinhação",
      content: "O computador escolhe um número aleatório entre 1 e 10. O usuário então tenta adivinhar o número. Se o usuário adivinhar o número corretamente, o código JavaScript deve exibir uma mensagem dizendo Parabéns!. Se o usuário adivinhar o número incorretamente, o código JavaScript deve exibir uma mensagem dizendo Tente novamente!.",
      url: "desafios/2_Adivinhacao/adivinhacao.html"
    }

  ];

  for (let clist = 0; clist < cards.length; clist++) {
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img class="image__background" src='./images/fundoDiv.jpg'></img>
    <h4> ${cards[clist].title} </h4><p>  ${cards[clist].content}  </p>`;
    card.addEventListener("click", function () {
      window.location.href = cards[clist].url;
    });
    document.querySelector(".card-list").appendChild(card);
  }
}

window.onload = addCards;
