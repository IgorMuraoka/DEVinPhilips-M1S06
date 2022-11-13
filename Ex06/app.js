async function idadeMedia(nome) {
    try {
        const resposta = await fetch(`https://api.agify.io/?country_id=BR&name=${nome}`);
        const data = await resposta.json();

        if (data.age === null){
            console.log('Nome não consta na base. Escolha outro');
        } else {
            console.log(`Nome: ${nome} - Idade Média: ${data.age}`);
        }
    } catch {(error) =>
        console.log(error);
    }
}

idadeMedia('Igor');