const menorValor = document.getElementById ("menor-valor");
const maiorValor = document.getElementById ("maior-valor");
const menorChute = 1;
const maiorChute = 1000;
const valorSorteado = numeroAleatorio();

menorValor.innerHTML = menorChute; 
maiorValor.innerHTML = maiorChute; 

function numeroAleatorio () {
    return (parseInt(Math.random() * maiorChute + 1));
}

console.log ("O número é: ", valorSorteado);

