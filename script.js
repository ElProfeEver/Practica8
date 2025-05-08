function cuenta(tipo){
    var numero1;
    numero1 = document.calc.txtnumero1.value;
    var numero2;
    numero2 = document.calc.txtnumero2.value;
    if(tipo == "Suma") {
    var result;
    result = eval(numero1) + eval(numero2);
    document.calc.resultado.value = result;
    }
    if(tipo == "Resta"){
    var result;
    result = eval(numero1) - eval(numero2);
    document.calc.resultado.value = result;
    }
    if(tipo == "Division"){
    var result;
    result = eval(numero1) / eval(numero2);
    document.calc.resultado.value = result;
    }
    if(tipo == "Multiplicacion"){
    var result;
    result = eval(numero1) * eval(numero2);
    document.calc.resultado.value = result;
    }
    }