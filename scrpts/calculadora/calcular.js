












function Calculate(){
    let valor1 = document.getElementById("valor1");
    let valor2 = document.getElementById("valor2");
    let val1 = Number(valor1.value)
    let val2 = Number(valor2.value)

    let value = GetOperation()
    let result = 0

    switch( 
        value
    ){
        case "adic":
        result = val1 + val2;
        console.log(`O resultado da adição foi ${result}`)
        break
        case "subt":
        result = val1 - val2;
        console.log(`O resultado da subtração foi ${result}`)
        break
    }
}

function GetOperation(){
    let operacao = document.getElementById("operacao");
    let valor = operacao.value;

    return valor
}


