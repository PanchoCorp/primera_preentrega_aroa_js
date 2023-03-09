function calculo(nombrePersona, peso, altura) {
    let imc = (peso / (altura * altura)) * 10000;
    console.log(imc);
    alert("Se Indice de Masa Corporal es: " + imc.toFixed(2));

    if (imc < 19) {
        alert(nombrePersona + ", usted tiene bajo peso.");
    }
    else if (imc >= 20 && imc < 25) {
        alert(nombrePersona + ", usted tiene peso normal.");
    }
    else if (imc >= 25 && imc < 30) {
        alert(nombrePersona + ", usted tiene sobrepeso.");
    }
    else {
        alert(nombrePersona + ", usted tiene OBESIDAD.");
    }
};

function cancelaSi() {
    while (true) {
        let nombrePersona = prompt("Ingrese su nombre");
        console.log(nombrePersona);

        if (nombrePersona === "") {
            break;
        }

        let peso = parseFloat(prompt("Ingrese su peso en kilogramos: "));
        console.log(peso);
        let altura = parseFloat(prompt("Ingrese su altura en centímetros:"));
        console.log(altura);

        calculo(nombrePersona, peso, altura);
    }

    alert("Hasta luego");
};

cancelaSi()




