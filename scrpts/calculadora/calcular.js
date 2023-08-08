function Calculate() {
  let valor1 = document.getElementById("valor1");
  let valor2 = document.getElementById("valor2");
  let val1 = Number(valor1.value);
  let val2 = Number(valor2.value);
  let showResult = document.getElementById("resultado");

  if (val1 == 0 || val2 == 0) {
    window.alert("Insira valores pra realizar o calculo");
  } else {
    let value = GetOperation();
    let result = 0;

    switch (value) {
      case "adic":
        result = val1 + val2;
        showResult.innerHTML = `O resultado da adição foi <b>${result}<b>.`;
        break;
      case "subt":
        result = val1 - val2;
        showResult.innerHTML = `O resultado da adição foi <b>${result}<b>.`;
        break;
      case "mult":
        result = val1 * val2;
        showResult.innerHTML = `O resultado da adição foi <b>${result}<b>.`;
        break;
      case "divi":
        result = val1 / val2;
        showResult.innerHTML = `O resultado da adição foi <b>${result}<b>.`;
        break;
    }
  }
}

function GetOperation() {
  let operacao = document.getElementById("operacao");
  let valor = operacao.value;

  return valor;
}
