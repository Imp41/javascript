let displayElement = document.getElementById('display')
let number1Button = document.getElementById('number1')
let number2Button = document.getElementById('number2')
let number3Button = document.getElementById('number3')
let number4Button = document.getElementById('number4')
let number5Button = document.getElementById('number5')
let number6Button = document.getElementById('number6')
let number7Button = document.getElementById('number7')
let number8Button = document.getElementById('number8')
let number9Button = document.getElementById('number9')
let number0Button = document.getElementById('number0')
let somarButton = document.getElementById('somar')
let subtrairButton = document.getElementById('subtrair')
let multiplicarButton = document.getElementById('multiplicar')
let dividirButton = document.getElementById('dividir')
let igualButton = document.getElementById('igual')
let apagarButton = document.getElementById('apagar')

function insert(num) {
    var numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num;
}
function clean() {
    document.getElementById('display').innerHTML = "";
}

function calcular () {
    var display = document.getElementById('display').innerHTML;
    if(display)
    {
        document.getElementById('display').innerHTML = eval(display);
    } else {
        document.getElementById('display').innerHTML = "Nada para calcular"
    }
}