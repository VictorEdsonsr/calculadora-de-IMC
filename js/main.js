const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);


    if (!peso) {
        return resultadoIMC("Peso invalido", false);
    }

    if (!altura) {
        return resultadoIMC("Altura invalida", false);
    }

    const IMC = calculaIMC(peso, altura).toFixed(2);
    const verificado = verificaIMC(IMC);
    const msg = `Seu IMC e ${IMC} (${verificado})`

    resultadoIMC(msg, true);
});

const calculaIMC = (peso, altura) => {
    return peso / altura ** 2
}

const criaParagrafo = () => {
    const p = document.createElement("p")
    return p
}

const resultadoIMC = (result, isValid) => {
    const resultado = form.querySelector("#resultado")
    resultado.innerHTML = "";
    const p = criaParagrafo();


    if (isValid) {
        p.classList.add("good")
    } else {
        p.classList.add("bad")
    }

    p.innerHTML = result;
    resultado.appendChild(p);

    return
}

const verificaIMC = (imc) => {
    const message = ["Abaixo do peso", "Normal", "Sobrepeso", "Obesidade", "Obesidade grave"]

    if (imc >= 39.9) return message[4];
    if (imc >= 30) return message[3];
    if (imc >= 25) return message[2];
    if (imc >= 18.5) return message[1];
    if (imc < 18.5) return message[0];
}