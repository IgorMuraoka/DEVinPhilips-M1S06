function sleep ( valor ) {
    return new Promise ( (res) => { 
       setTimeout(() => res(valor), 3000);
    })
  }

sleep(100)
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log(erro))
    .finally(() => console.log('Finalizado!'));