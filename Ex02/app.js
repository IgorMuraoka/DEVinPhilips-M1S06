// Mostra horário no console

// function mostraHorario(){
//     const horario = new Date().toLocaleTimeString();
//     return console.log(horario);
// }

// setInterval(mostraHorario, 2000)

// Mostra horário no HTML

function horaTela(h1) {
    h1.innerHTML = new Date().toLocaleTimeString();
}

setInterval(horaTela, 2000, document.getElementById('h1'));