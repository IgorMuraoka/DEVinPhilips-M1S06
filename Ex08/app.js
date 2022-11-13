const criaElementoTexto = (tipo, texto) => {
    const elemento = document.createElement(tipo);
    elemento.innerText = texto;
    return elemento;
  };

async function geraUsuarios(qtd = 10) {
    const response = await fetch(`https://randomuser.me/api/?results=${qtd}`)
    const data = await response.json();
    console.log(data);
    const lista = document.getElementById('lista');
    lista.innerHTML = '';
    
    for(let i=0; i < data.results.length; i++){
        const li = document.createElement('li');
        const container = document.createElement('div');
        const info = document.createElement('div');
        container.classList.add('container');
        info.classList.add('info');
        
        const nome = criaElementoTexto(
            'p',
            `${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last}`
          );
    
        const email = criaElementoTexto('p', data.results[i].email);

        const endereco = criaElementoTexto(
        'p',
        `${data.results[i].location.street.name} - ${data.results[i].location.street.number} - ${data.results[i].location.city} - ${data.results[i].location.state} - ${data.results[i].location.country}`
        );

        const foto = document.createElement('img');
        foto.src = data.results[i].picture.large;

        container.appendChild(foto);
        info.appendChild(nome);
        info.appendChild(email);
        info.appendChild(endereco);
        container.appendChild(info);
        li.appendChild(container);
        lista.appendChild(li);
    }
}
geraUsuarios();

const qtd = document.getElementById('quantidade');
qtd.addEventListener('change', e => geraUsuarios(e.target.value))