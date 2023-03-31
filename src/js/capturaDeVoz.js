window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const valorProposto = document.getElementById ("chute");
const recognition = new SpeechRecognition ();

recognition.lang = "pt-Br";
recognition.start ();

recognition.addEventListener ("result", function onSpeak (event) {
    const resultado = event.results[0][0].transcript;
    exibeNaTela (resultado);
    validamentoSeONumeroEValido (resultado);
});

function exibeNaTela (chute) {
    valorProposto.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener ("end", () => recognition.start());