/*
    passo a passo das ideias do que fazer;
- passo 1 - pegar o elemento HTML dos botões;
- passo 2 - identificar o click do usuário;
- passo 3 - desmacar o botão selecionado anterior;
- passo 4 - marcar o botão o botão clicado (selecionar);
- passo 5 - esconder as imagens de fundo;
- passo 6 - apararecer a proxima imagem;
    */

//passo-1
const botoesCarrocel = document.querySelectorAll('.botao');
//passo 6 incluiu essa linha com a lista de imagens;
const imagens = document.querySelector(".imagem");
//passo-2
botoesCarrocel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //console.log("clicou no botão");

        //passo-3
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //passo-4
        botao.classList.add("selecionado");

        //passo-5
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove("ativa");

        //passo-6
        //console.log(indice);
        //console.log(imagens);
        imagens[indice].classList.add('ativa');

    })

})


