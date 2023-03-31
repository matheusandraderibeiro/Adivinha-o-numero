function validamentoSeONumeroEValido (resultado) {
    const numero = +resultado;  

    if (Number.isNaN (numero)) {
        valorProposto.innerHTML += "<div>valor invalido</div>";
    }
    
    if (numero < menorChute || numero > maiorChute ) {
            valorProposto.innerHTML += `
            <div>Valor invalido: O numero precisa está entre ${menorChute} e ${maiorChute}</div>
        `
    }

    if (numero === valorSorteado) {
        document.body.innerHTML = `
            <h2> Parabens! Você acertou </h2>
            <h3>O número secreto era ${valorSorteado}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > valorSorteado) {
            valorProposto.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
            valorProposto.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

    if (resultado === "Game Over.") {
        document.body.innerHTML = `
            <h2> Game Over </h2>
            <h3>Não houve vencedor nessa partida</h3>
            <h3>O número secreto era ${valorSorteado}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        document.body.style.background = "#ff0000"; 
    }
}

document.body.addEventListener ("click", (event) => {
    if (event.target.id == "jogar-novamente") {
        window.location.reload();
    }
});