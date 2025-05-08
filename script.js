function sumar() {
    var num1;
    num1 = document.calc.txtnumero1.value;
    var num2;
    num2 = document.calc.txtnumero2.value;
    var opc;
    opc = eval(num1) + eval(num2);
    document.calc.resultado.value = opc;
    }